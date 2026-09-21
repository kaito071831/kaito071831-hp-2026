"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Tokyo" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time} JST</span>;
}
