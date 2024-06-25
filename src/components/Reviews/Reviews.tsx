"use client";
import Slider from "react-slick";
import Review from "../Review/Review";
import { useEffect, useState } from "react";
import { IReview } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.css";

export default function Reviews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/reviews");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  let settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mt-[36px]">
      {data.map((item: IReview) => (
        <Review key={item.id} {...item} />
      ))}
    </Slider>
  );
}
