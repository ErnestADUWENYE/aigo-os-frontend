import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


type GetStartedBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  interest?: string;
  commercialTopic?: string;
  timeline?: string;
  message?: string;
};


function clean(
  value: unknown
) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}


function escapeHtml(
  value: string
) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function interestLabel(
  value: string
) {
  const labels: Record<string, string> = {
    "governance-intelligence":
      "Governance Intelligence",

    "business-impact-intelligence":
      "Business Impact Intelligence",

    "connected-intelligence":
      "Govern and Impact together",

    platform:
      "Broader AIGO-OS platform",

    unsure:
      "Not sure yet",
  };

  return labels[value] ?? value;
}


function commercialTopicLabel(
  value: string
) {
  const labels: Record<string, string> = {
    pricing:
      "Pricing and licensing",

    procurement:
      "Procurement",

    deployment:
      "Deployment requirements",

    evaluation:
      "Evaluation to adoption",

    enterprise:
      "Enterprise rollout",

    contracting:
      "Contracting and commercial terms",

    security:
      "Security or technical due diligence",

    other:
      "Other commercial enquiry",
  };

  return labels[value] ?? value;
}


function timelineLabel(
  value: string
) {
  const labels: Record<string, string> = {
    now:
      "Evaluating now",

    quarter:
      "Within 3 months",

    "six-months":
      "Within 6 months",

    year:
      "Within 12 months",

    planning:
      "Early planning",
  };

  return labels[value] ?? value;
}


export async function POST(
  request: Request
) {
  try {
    const apiKey =
      process.env.RESEND_API_KEY;

    const recipient =
      process.env.AIGO_CONTACT_RECIPIENT;


    if (!apiKey) {
      console.error(
        "RESEND_API_KEY is not configured."
      );

      return NextResponse.json(
        {
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }


    if (!recipient) {
      console.error(
        "AIGO_CONTACT_RECIPIENT is not configured."
      );

      return NextResponse.json(
        {
          error:
            "Commercial recipient is not configured.",
        },
        {
          status: 500,
        }
      );
    }


    const body =
      await request.json() as GetStartedBody;


    const firstName =
      clean(body.firstName);

    const lastName =
      clean(body.lastName);

    const email =
      clean(body.email);

    const company =
      clean(body.company);

    const role =
      clean(body.role);

    const interest =
      clean(body.interest);

    const commercialTopic =
      clean(body.commercialTopic);

    const timeline =
      clean(body.timeline);

    const message =
      clean(body.message);


    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !interest ||
      !commercialTopic ||
      !message
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }


    const resend =
      new Resend(apiKey);


    const fullName =
      `${firstName} ${lastName}`.trim();

    const readableInterest =
      interestLabel(interest);

    const readableCommercialTopic =
      commercialTopicLabel(commercialTopic);

    const readableTimeline =
      timeline
        ? timelineLabel(timeline)
        : "Not specified";


    const subject =
      `[AIGO-OS] Commercial Enquiry | ${company} | ${readableCommercialTopic}`;


    const html = `
      <div
        style="
          max-width: 720px;
          margin: 0 auto;
          font-family: Arial, Helvetica, sans-serif;
          color: #152536;
          line-height: 1.6;
        "
      >
        <div
          style="
            padding: 24px 28px;
            background: #081a2d;
            color: #ffffff;
          "
        >
          <div
            style="
              color: #d9b34c;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            "
          >
            AIGO-OS
          </div>

          <h1
            style="
              margin: 8px 0 0;
              font-size: 26px;
              line-height: 1.25;
            "
          >
            New Commercial Enquiry
          </h1>
        </div>


        <div
          style="
            padding: 28px;
            background: #f6f8fa;
          "
        >
          <table
            cellpadding="0"
            cellspacing="0"
            style="
              width: 100%;
              border-collapse: collapse;
              background: #ffffff;
            "
          >
            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                Name
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(fullName)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                Email
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(email)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                Organisation
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(company)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                Role
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(role || "Not provided")}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                AIGO-OS interest
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(readableInterest)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec; font-weight: 700;">
                Commercial topic
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(readableCommercialTopic)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; font-weight: 700;">
                Expected timeline
              </td>

              <td style="padding: 12px 14px;">
                ${escapeHtml(readableTimeline)}
              </td>
            </tr>
          </table>


          <div
            style="
              margin-top: 24px;
              padding: 20px;
              background: #ffffff;
            "
          >
            <strong>
              Commercial context
            </strong>

            <p
              style="
                margin: 9px 0 0;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(message)}
            </p>
          </div>
        </div>
      </div>
    `;


    const result =
      await resend.emails.send({
        from:
          process.env.AIGO_EMAIL_FROM ?? "AIGO-OS Website <onboarding@resend.dev>",

        to: [recipient],

        replyTo: email,

        subject,

        html,
      });


    if (result.error) {
      console.error(
        "Resend Get Started error:",
        result.error
      );

      return NextResponse.json(
        {
          error:
            "The commercial enquiry could not be sent.",
        },
        {
          status: 502,
        }
      );
    }


    return NextResponse.json(
      {
        ok: true,
      },
      {
        status: 200,
      }
    );
  }
  catch (error) {
    console.error(
      "Get Started API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "The commercial enquiry could not be sent.",
      },
      {
        status: 500,
      }
    );
  }
}

