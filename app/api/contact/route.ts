import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "Rivora Holidays <info@rivoraholidays.com>",
      to: ["info@rivoraholidays.com"],
      replyTo: email,
      subject: "🌍 New Enquiry - Rivora Holidays",

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; max-width:700px;">
          <h2 style="color:#d4af37;">
            🌍 New Enquiry - Rivora Holidays
          </h2>

          <table cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
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

          <br>

          <p>
            <strong>Website:</strong>
            https://rivoraholidays.com
          </p>

          <p>
            This enquiry was submitted from the Rivora Holidays website.
          </p>
        </div>
      `,
    });

    console.log("Resend Response:", data);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Resend Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}