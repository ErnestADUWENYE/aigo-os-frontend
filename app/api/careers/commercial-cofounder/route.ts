import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


type ApplicationBody = {
  name?: string;
  email?: string;
  linkedin?: string;
  location?: string;
  currentRole?: string;
  interest?: string;
  enterpriseExperience?: string;
  contribution?: string;
  commitment?: string;
  equityOnly?: string;
};


function clean(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}


function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function commitmentLabel(value: string) {
  const labels: Record<string, string> = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    flexible: "Flexible",
    other: "Other",
  };

  return labels[value] ?? value;
}


export async function POST(request: Request) {
  try {
    const apiKey =
      process.env.RESEND_API_KEY;

    const recipient =
      process.env.AIGO_CONTACT_RECIPIENT;


    if (!apiKey || !recipient) {
      console.error(
        "Resend application configuration is missing."
      );

      return NextResponse.json(
        {
          error:
            "Application delivery is not configured.",
        },
        {
          status: 500,
        }
      );
    }


    const body =
      await request.json() as ApplicationBody;


    const name =
      clean(body.name);

    const email =
      clean(body.email);

    const linkedin =
      clean(body.linkedin);

    const location =
      clean(body.location);

    const currentRole =
      clean(body.currentRole);

    const interest =
      clean(body.interest);

    const enterpriseExperience =
      clean(body.enterpriseExperience);

    const contribution =
      clean(body.contribution);

    const commitment =
      clean(body.commitment);

    const equityOnly =
      clean(body.equityOnly);


    if (
      !name ||
      !email ||
      !location ||
      !currentRole ||
      !interest ||
      !enterpriseExperience ||
      !contribution ||
      !commitment ||
      !equityOnly
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


    if (equityOnly !== "yes") {
      return NextResponse.json(
        {
          error:
            "This opportunity is currently equity-only. Please confirm that you understand this before applying.",
        },
        {
          status: 400,
        }
      );
    }


    const resend =
      new Resend(apiKey);


    const readableCommitment =
      commitmentLabel(commitment);


    const html = `
      <div style="max-width:720px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#152536;line-height:1.6;">
        <div style="padding:26px 30px;background:#081a2d;color:#ffffff;">
          <div style="color:#d9b34c;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
            AIGO-OS Careers
          </div>

          <h1 style="margin:8px 0 0;font-size:26px;line-height:1.25;">
            Commercial Co-founder Application
          </h1>
        </div>

        <div style="padding:28px;background:#f6f8fa;">
          <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#ffffff;">
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                Applicant
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                Email
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(email)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                Location
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(location)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                Current role
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(currentRole)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                LinkedIn
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(linkedin || "Not provided")}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;font-weight:700;">
                Commitment
              </td>

              <td style="padding:12px 14px;border-bottom:1px solid #e3e8ec;">
                ${escapeHtml(readableCommitment)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 14px;font-weight:700;">
                Equity-only acknowledged
              </td>

              <td style="padding:12px 14px;">
                Yes
              </td>
            </tr>
          </table>


          <div style="margin-top:22px;padding:20px;background:#ffffff;">
            <strong>
              Why they are interested
            </strong>

            <p style="margin:9px 0 0;white-space:pre-wrap;">
              ${escapeHtml(interest)}
            </p>
          </div>


          <div style="margin-top:14px;padding:20px;background:#ffffff;">
            <strong>
              Enterprise experience
            </strong>

            <p style="margin:9px 0 0;white-space:pre-wrap;">
              ${escapeHtml(enterpriseExperience)}
            </p>
          </div>


          <div style="margin-top:14px;padding:20px;background:#ffffff;">
            <strong>
              Relationships, market experience and capabilities
            </strong>

            <p style="margin:9px 0 0;white-space:pre-wrap;">
              ${escapeHtml(contribution)}
            </p>
          </div>
        </div>
      </div>
    `;


    const result =
      await resend.emails.send({
        from:
          process.env.AIGO_EMAIL_FROM ?? process.env.AIGO_EMAIL_FROM ?? "AIGO-OS Website <onboarding@resend.dev>",

        to: [recipient],

        replyTo: email,

        subject:
          `[AIGO-OS Careers] Commercial Co-founder Application | ${name}`,

        html,
      });


    if (result.error) {
      console.error(
        "Resend careers error:",
        result.error
      );

      return NextResponse.json(
        {
          error:
            "The application could not be sent.",
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
      "Careers application API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "The application could not be sent.",
      },
      {
        status: 500,
      }
    );
  }
}

