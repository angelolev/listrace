import { IEntry } from "@/types";
import Image from "next/image";

export default function Entry({
  image,
  href,
  name,
  author,
  publishMonth,
  publishYear,
  summary,
}: IEntry) {
  return (
    <div className="entry shadow-feature-card hover:shadow-activity-card duration-300 text-left">
      <div className="image relative h-[237px]">
        <Image src={image} fill alt="Entry image" />
      </div>
      <div className="info p-[25px]">
        <a className="link" href={href}>
          {name}
        </a>
        <div className="author mt-[12px] mb-[20px]">
          <p className="text-[#8f949d] text-[14px] font-normal">
            Posted by{" "}
            <span className="text-light-black uppercase font-medium">
              {author}
            </span>{" "}
            {publishMonth} {publishYear}
          </p>
        </div>
        <p className="text-[#767f86] text-[14px] leading-6">{summary}</p>
      </div>
    </div>
  );
}
