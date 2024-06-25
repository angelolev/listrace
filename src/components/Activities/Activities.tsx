import { getData } from "@/utils";
import ActivityCard from "../ActivityCard/ActivityCard";
import { IActivityCard } from "@/types";

export default async function Activities() {
  const data = await getData("explore");

  return (
    <div className="activities pt-[78px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item: IActivityCard) => (
        <ActivityCard key={item.id} {...item} />
      ))}
    </div>
  );
}
