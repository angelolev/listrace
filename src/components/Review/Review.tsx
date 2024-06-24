import { IReview } from "@/types";
import Image from "next/image";

export default function Review({
  image,
  client,
  location,
  testimonial,
}: IReview) {
  return (
    <div className="review shadow-feature-card py-[50px] px-[30px] bg-white">
      <div className="client flex gap-6 items-center">
        <div className="image">
          <Image alt="Client image" src={image} width={40} height={40} />
        </div>
        <div className="info">
          <h4 className="text-dark-gray text-[18px] font-medium capitalize">
            {client}
          </h4>
          <p className="text-[#a2a5ab] text-[14px] font-normal mt-[10px] mb-[9px]">
            {location}
          </p>
          <i className="fi fi-ss-star"></i>
          <i className="fi fi-ss-star"></i>
          <i className="fi fi-ss-star"></i>
          <i className="fi fi-ss-star"></i>
          <i className="fi fi-ss-star"></i>
        </div>
      </div>
      <div className="testimonial mt-[18px]">
        <p className="text-[#8d939e] text-[14px] font-light leading-6">
          {testimonial}
        </p>
      </div>
    </div>
  );
}
