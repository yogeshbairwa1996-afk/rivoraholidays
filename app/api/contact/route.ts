import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "Rivora Holidays <onboarding@resend.dev>",
      to: ["info@rivoraholidays.com"],
      subject: "🌍 New Enquiry - Rivora Holidays",
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#d4af37;">New Enquiry - Rivora Holidays</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>
          </table>

          <br/>

          <p>
            This enquiry was submitted from
            <strong> rivoraholidays.com</strong>.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}