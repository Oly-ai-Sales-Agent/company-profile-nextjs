import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    await resend.emails.send({
      from: "EmailService@resend.dev",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: "Oly Demo Request",
      html: `
        <h2>New Demo Requested For Oly AI Sales Agent</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Occupation:</strong> ${data.occupation}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Mobile:</strong> ${data.mobileNumber}</p>
        <p><strong>Email:</strong> ${data.emailAddress}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[request-demo]", message);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}