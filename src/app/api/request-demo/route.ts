import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await resend.emails.send({
      from: "EmailService@resend.dev",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: "New Demo Request",
      html: `
        <h2>New Demo Request</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Occupation:</strong> ${data.occupation}</p>
        <p><strong>Company:</strong> ${data.company_name}</p>
        <p><strong>Mobile:</strong> ${data.mobile_number}</p>
        <p><strong>Email:</strong> ${data.email_address}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}