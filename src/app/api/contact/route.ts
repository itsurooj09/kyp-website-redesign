import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organisation, email, phone, message } = body;

    // Strict validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
    }
    if (!organisation || !organisation.trim()) {
      return NextResponse.json({ error: "Organisation name is required." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid business email address is required." }, { status: 400 });
    }

    // In a live production environment with Resend, Sendgrid, or SMTP:
    // await sendEmail({ to: "hello@kyp.io", ... })
    // Log submission securely in development:
    console.log("[KYP Contact Lead Received]:", {
      name,
      organisation,
      email,
      phone: phone || "Not provided",
      message: message || "No message provided",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. A KYP compliance specialist will be in touch within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting. Please email hello@kyp.io directly." },
      { status: 500 }
    );
  }
}
