import { NextResponse } from "next/server";

type ContactPayload = {
  intent?: string;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  environment?: string;
  priority?: string;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.AIGO_CONTACT_RECIPIENT;

    if (!apiKey || !recipient) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        {
          ok: false,
          message: "Contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    const payload = (await request.json()) as ContactPayload;

    const intent = clean(payload.intent, 40) || "contact";
    const name = clean(payload.name, 120);
    const email = clean(payload.email, 200);
    const company = clean(payload.company, 160);
    const role = clean(payload.role, 160);
    const environment = clean(payload.environment, 4000);
    const priority = clean(payload.priority, 4000);

    if (!name || !email || !company || !environment || !priority) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!email.includes("@") || email.length < 5) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a valid work email.",
        },
        { status: 400 }
      );
    }

    const subject = `AIGO-OS ${intent} inquiry - ${company}`;

    const text = [
      "AIGO-OS Website Inquiry",
      "",
      `Inquiry type: ${intent}`,
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `Role: ${role || "Not provided"}`,
      "",
      "AI environment / scope:",
      environment,
      "",
      "Governance priority / inquiry:",
      priority,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AIGO-OS Website <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Resend contact submission failed:",
        response.status,
        errorText
      );

      return NextResponse.json(
        {
          ok: false,
          message: "We could not send your inquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("Contact submission failed:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "We could not send your inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}