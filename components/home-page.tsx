"use client";
import { getLatLong } from "@/components/utils/api";
import { useEffect, useState } from "react";
import Modal from "./modal";

export default function HomePage() {
  const [zip, setZip] = useState(false);
  console.log(process.env.API_URL, "env 1");
  useEffect(() => {
    const fetchData = async () => {
      const a = await getLatLong();
      if (!a.have) {
        setZip(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div> hello</div>
      <Modal zip={zip} />
    </div>
  );
}
