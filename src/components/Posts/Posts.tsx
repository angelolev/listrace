"use client";
import { useEffect, useState } from "react";
import Entry from "../Entry/Entry";
import { IEntry } from "@/types";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/posts");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="posts grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item: IEntry) => (
        <Entry key={item.id} {...item} />
      ))}
    </div>
  );
}
