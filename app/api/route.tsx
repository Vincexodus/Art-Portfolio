// app/api/send/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "vincent4552@gmail.com",
      subject: "Jack Chin - Art Gallery Contact Message",
      html: `<p>${body.firstName}</p>`,
    });

    if (error) {
      return new NextResponse(JSON.stringify({ error }), { status: 400 });
    }
    return new NextResponse(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
