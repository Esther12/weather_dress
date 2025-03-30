"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/types";
import { setZip } from "../redux/slices/locationSlice";
import { motion } from "framer-motion";
import { getLatLong } from "@/utils/api";
import Modal from "./modal";
export default function HomePage() {
  const dispatch = useDispatch();
  const zip = useSelector((state: RootState) => state.location.zip);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatLong();
      if (data.have) {
        dispatch(setZip(data.lat)); // Example: Update with latitude or other data
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className="flex w-full flex-col items-center">
      <section className="flex w-full items-center justify-between">
        <h1 className="text-2xl sm:text-3xl md:text-3xl">Check what should you <span className="relative">wear for today <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-4 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span> </h1>
        <div className="px-4 py-1 grid place-content-center">
          <Modal />
        </div>
      </section>
    </div>
  );
}
