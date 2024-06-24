import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = [
    {
      id: 0,
      name: "Tommy helfinger bar",
      rating: "5.0",
      ratingCount: 10,
      minValue: 5,
      maxValue: 300,
      category: "Restaurant",
      image: "/images/explore/e1.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: false,
    },
    {
      id: 1,
      name: "Swim And Dine Resort",
      rating: "4.5",
      ratingCount: 8,
      minValue: 50,
      maxValue: 500,
      category: "Hotel",
      image: "/images/explore/e2.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: true,
    },
    {
      id: 2,
      name: "Europe Tour",
      rating: "5.0",
      ratingCount: 15,
      minValue: "5k",
      maxValue: "10k",
      category: "Destination",
      image: "/images/explore/e3.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: false,
    },
    {
      id: 3,
      name: "Banglow With Swiming Pool",
      rating: "5.0",
      ratingCount: 10,
      minValue: "10k",
      maxValue: "15k",
      category: "Real State",
      image: "/images/explore/e4.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: false,
    },
    {
      id: 4,
      name: "Vintage Car Expo",
      rating: "4.2",
      ratingCount: 8,
      minValue: 500,
      maxValue: 1200,
      category: "Automotion",
      image: "/images/explore/e5.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: true,
    },
    {
      id: 5,
      name: "Thailand Tour",
      rating: "5.0",
      ratingCount: 15,
      minValue: "5k",
      maxValue: "10k",
      category: "Destination",
      image: "/images/explore/e6.jpg",
      hostImage: "/images/hosts/c1.png",
      hostDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
      status: true,
    },
  ];

  return NextResponse.json(data);
}
