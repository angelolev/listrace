import { IActivityCard } from "@/types";
import Image from "next/image";

export default function ActivityCard({
  name,
  rating,
  ratingCount,
  minValue,
  maxValue,
  category,
  image,
  hostImage,
  hostDescription,
  status,
}: IActivityCard) {
  return (
    <div className="activity-card border-[#edeff1] border-[1px] text-left rounded-[3px] hover:shadow-activity-card duration-300">
      <div className="image relative h-[254px] contrast-[.6]">
        <Image alt="Activity image" src={image} fill />
      </div>
      <div className="content py-[25px] px-[15px]">
        <h3>
          <a className="link" href="/">
            {name}
          </a>
        </h3>
        <p className="text-[12px] text-paragraph flex flex-row gap-2 items-center mt-[15px]">
          <span className="bg-skyblue text-white px-2 py-1 rounded-[3px]">
            {rating}
          </span>
          <a href="#"> {ratingCount} ratings</a>
          <span className="">
            from
            <span className="text-primary-600">
              {" "}
              ${minValue}-${maxValue}
            </span>
          </span>
          <a href="#" className="capitalize">
            {category}
          </a>
        </p>
        <div className="host mt-[20px]">
          <div className="image relative">
            <Image
              alt="Activity image"
              src={hostImage}
              width={40}
              height={40}
            />
          </div>
          <p className="text-paragraph text-[12px]">{hostDescription}</p>
        </div>
        <hr className="text-[#e1e5eb] mt-[28px] mb-[20px]" />
        <div className="extra-information">
          <p
            className={`text-[12px] ${
              status ? "text-green" : "text-primary-600"
            }`}
          >
            {status ? "Open Now" : "Closed Now"}
          </p>
        </div>
      </div>
    </div>
  );
}
