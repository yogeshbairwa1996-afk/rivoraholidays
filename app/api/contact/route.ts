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
        <h2>New Enquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    console.log("RESEND RESPONSE =>", data);

    return NextResponse.json(data);

  } catch (err) {
    console.error("RESEND ERROR =>", err);

    return NextResponse.json(
      {
        success: false,
        error: err,
      },
      {
        status: 500,
      }
    );
  }
}