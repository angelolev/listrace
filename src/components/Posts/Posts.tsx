import Entry from "../Entry/Entry";
import { IEntry } from "@/types";
import { getData } from "@/utils";

export default async function Posts() {
  // const data = await getData("posts");

  return (
    <div className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[80px]">
      {/* {data.map((item: IEntry) => (
        <Entry key={item.id} {...item} />
      ))} */}
    </div>
  );
}
