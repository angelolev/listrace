import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const Formdata = await req.formData();
  const email = Formdata.get("email");
  //Response
  return NextResponse.json({ email });
}
