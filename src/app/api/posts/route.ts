import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = [
    {
      id: 0,
      name: "How to find your Desired Place more quickly",
      image: "/images/blog/b1.jpg",
      href: "/",
      author: "Admin",
      publishMonth: "March",
      publishYear: 2018,
      summary:
        "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod  empore incididunt ut labore et dolore magna.",
    },
    {
      id: 1,
      name: "How to find your Desired Place more quickly",
      image: "/images/blog/b2.jpg",
      href: "/",
      author: "Admin",
      publishMonth: "March",
      publishYear: 2018,
      summary:
        "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod  empore incididunt ut labore et dolore magna.",
    },
    {
      id: 2,
      name: "How to find your Desired Place more quickly",
      image: "/images/blog/b3.jpg",
      href: "/",
      author: "Admin",
      publishMonth: "March",
      publishYear: 2018,
      summary:
        "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod  empore incididunt ut labore et dolore magna.",
    },
  ];

  return NextResponse.json(data);
}
