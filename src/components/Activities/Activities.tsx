"use client";
import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import { IActivityCard } from "@/types";

export default function Activities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/explore");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="activities pt-[78px] grid grid-cols-1 gap-8">
      {data.map((item: IActivityCard) => (
        <ActivityCard key={item.id} {...item} />
      ))}
    </div>
  );
}
