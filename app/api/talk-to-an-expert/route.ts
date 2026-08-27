import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


type TalkToExpertBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  topic?: string;
  question?: string;
  environment?: string;
};


function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function clean(
  value: unknown
) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
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
      await request.json() as TalkToExpertBody;


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

    const topic =
      clean(body.topic);

    const question =
      clean(body.question);

    const environment =
      clean(body.environment);


    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !topic ||
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


    const subject =
      `[AIGO-OS] Talk to an Expert | ${company}`;


    const html = `
      <div
        style="
          font-family:
            Arial,
            Helvetica,
            sans-serif;
          max-width: 720px;
          margin: 0 auto;
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
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #d9b34c;
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
            Talk to an Expert
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
            A new Talk to an Expert request was submitted
            through the AIGO-OS website.
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
                Topic
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(topic)}
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
              Question
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
        /*
         * Replace this later with a verified
         * AIGO-OS sending domain if you have one.
         */
        from:
          process.env.AIGO_EMAIL_FROM ?? "AIGO-OS Website <onboarding@resend.dev>",

        /*
         * ALL submissions go to the recipient
         * configured in .env.local / production.
         */
        to: [recipient],

        /*
         * Clicking Reply in your inbox will reply
         * directly to the person who submitted
         * the form.
         */
        replyTo: email,

        subject,

        html,
      });


    if (result.error) {
      console.error(
        "Resend error:",
        result.error
      );

      return NextResponse.json(
        {
          error:
            "The message could not be sent.",
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
      "Talk to an Expert API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "The message could not be sent.",
      },
      {
        status: 500,
      }
    );
  }
}

