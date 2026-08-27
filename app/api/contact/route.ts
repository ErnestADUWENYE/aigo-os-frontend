import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  topic?: string;
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


function topicLabel(
  value: string
) {
  const labels: Record<string, string> = {
    general:
      "General enquiry",

    partnerships:
      "Partnerships",

    media:
      "Media and press",

    corporate:
      "Company and corporate",

    website:
      "Website feedback",

    other:
      "Other",
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
            "Contact recipient is not configured.",
        },
        {
          status: 500,
        }
      );
    }


    const body =
      await request.json() as ContactBody;


    const firstName =
      clean(body.firstName);

    const lastName =
      clean(body.lastName);

    const email =
      clean(body.email);

    const company =
      clean(body.company);

    const topic =
      clean(body.topic);

    const message =
      clean(body.message);


    if (
      !firstName ||
      !lastName ||
      !email ||
      !topic ||
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

    const readableTopic =
      topicLabel(topic);


    const subject =
      `[AIGO-OS] Contact Enquiry | ${readableTopic}`;


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
            New Contact Enquiry
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
                Company
              </td>

              <td style="padding: 12px 14px; border-bottom: 1px solid #e3e8ec;">
                ${escapeHtml(
                  company ||
                  "Not provided"
                )}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px 14px; font-weight: 700;">
                Topic
              </td>

              <td style="padding: 12px 14px;">
                ${escapeHtml(readableTopic)}
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
              Message
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
        "Resend Contact error:",
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
      "Contact API error:",
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

