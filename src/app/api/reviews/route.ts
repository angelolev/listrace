import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = [
    {
      id: 0,
      image: "/images/hosts/c1.png",
      client: "Tom Leakar",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 1,
      image: "/images/hosts/c2.png",
      client: "Monirul Islam",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 2,
      image: "/images/hosts/c3.png",
      client: "Shorab hosain",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 3,
      image: "/images/hosts/c4.png",
      client: "Tom Leakar",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 4,
      image: "/images/hosts/c1.png",
      client: "Tom Leakar",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 5,
      image: "/images/hosts/c2.png",
      client: "Monirul Islam",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 6,
      image: "/images/hosts/c3.png",
      client: "Shorab hosain",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      id: 7,
      image: "/images/hosts/c4.png",
      client: "Tom Leakar",
      location: "London, UK",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
  ];

  return NextResponse.json(data);
}
