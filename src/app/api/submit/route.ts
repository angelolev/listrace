import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  console.log(email, "email submitted");

  try {
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
