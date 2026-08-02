import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // ==========================
    // Admin Email
    // ==========================
    await resend.emails.send({
      from: "Rivora Holidays <info@rivoraholidays.com>",
      to: ["info@rivoraholidays.com"],
      subject: "🌍 New Enquiry - Rivora Holidays",
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#d4af37;">🌍 New Enquiry - Rivora Holidays</h2>

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

          <br>

          <p>This enquiry was submitted from <strong>rivoraholidays.com</strong>.</p>
        </div>
      `,
    });

    // ==========================
    // Customer Auto Reply
    // ==========================
    await resend.emails.send({
      from: "Rivora Holidays <info@rivoraholidays.com>",
      to: [email],
      subject: "Thank You for Contacting Rivora Holidays 🌍",
      html: `
        <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;padding:30px;background:#ffffff;border:1px solid #eee;border-radius:10px;">

          <h1 style="color:#d4af37;text-align:center;">
            🌍 Rivora Holidays
          </h1>

          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting <strong>Rivora Holidays</strong>.
          </p>

          <p>
            We have successfully received your enquiry.
            Our travel expert will contact you shortly.
          </p>

          <br>

          <h3>Your Enquiry Details</h3>

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
            📞 <strong>+91 9828260533</strong><br>
            📧 info@rivoraholidays.com<br>
            🌐 https://rivoraholidays.com
          </p>

          <br>

          <div style="padding:15px;background:#f8f8f8;border-left:5px solid #d4af37;">
            <strong>Thank you for choosing Rivora Holidays.</strong><br>
            We look forward to planning your next unforgettable journey.
          </div>

          <br>

          <p style="text-align:center;color:#666;">
            Holidays • Events • Weddings
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error(error);

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