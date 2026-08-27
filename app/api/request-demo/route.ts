import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


type RequestDemoBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  demoFocus?: string;
  objective?: string;
  question?: string;
  environment?: string;
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


function demoFocusLabel(
  value: string
) {
  const labels: Record<string, string> = {
    "governance-intelligence":
      "Governance Intelligence",

    "business-impact-intelligence":
      "Business Impact Intelligence",

    "connected-intelligence":
      "How Govern and Impact work together",

    "platform-overview":
      "Full AIGO-OS platform overview",

    unsure:
      "Not sure yet",
  };

  return labels[value] ?? value;
}


function objectiveLabel(
  value: string
) {
  const labels: Record<string, string> = {
    "governance-state":
      "Understand AI governance state",

    "controls-coverage":
      "Understand policies, controls and governance coverage",

    "ownership-accountability":
      "Clarify ownership and accountability",

    "governance-change-impact":
      "Understand governance impact when things change",

    "business-impact":
      "Understand AI business impact",

    dependencies:
      "Understand business and service dependencies",

    "change-impact":
      "Understand the business impact of change",

    "incident-impact":
      "Understand the business impact of incidents",

    "enterprise-context":
      "Connect AI activity with enterprise context",

    relationships:
      "Understand relationships across the AI environment",

    other:
      "Something else",
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
            "Form recipient is not configured.",
        },
        {
          status: 500,
        }
      );
    }


    const body =
      await request.json() as RequestDemoBody;


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

    const demoFocus =
      clean(body.demoFocus);

    const objective =
      clean(body.objective);

    const question =
      clean(body.question);

    const environment =
      clean(body.environment);


    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !demoFocus ||
      !objective ||
      !question
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

    const readableFocus =
      demoFocusLabel(demoFocus);

    const readableObjective =
      objectiveLabel(objective);


    const subject =
      `[AIGO-OS] Demo Request | ${company}`;


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
            New Demo Request
          </h1>
        </div>


        <div
          style="
            padding: 28px;
            background: #f6f8fa;
          "
        >
          <p
            style="
              margin: 0 0 22px;
              color: #506274;
            "
          >
            A new AIGO-OS demo request was submitted
            through the website.
          </p>


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
                Company
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
                Demo focus
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(readableFocus)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; font-weight: 700;">
                Primary objective
              </td>

              <td style="padding: 12px 14px;">
                ${escapeHtml(readableObjective)}
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
              What would make the demo useful?
            </strong>

            <p
              style="
                margin: 9px 0 0;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(question)}
            </p>
          </div>


          <div
            style="
              margin-top: 14px;
              padding: 20px;
              background: #ffffff;
            "
          >
            <strong>
              Current environment
            </strong>

            <p
              style="
                margin: 9px 0 0;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(
                environment ||
                "Not provided"
              )}
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
        "Resend Demo error:",
        result.error
      );

      return NextResponse.json(
        {
          error:
            "The demo request could not be sent.",
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
      "Request Demo API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "The demo request could not be sent.",
      },
      {
        status: 500,
      }
    );
  }
}

