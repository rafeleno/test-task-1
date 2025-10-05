"use client";
import { createContext, useEffect, useState } from "react";

export const TimeContext = createContext<{
  time: string;
  timeStatus: "short" | "normal" | "over";
  isTimeVisible: boolean;
} | null>(null);

export default function TimeProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState<string>("02:00");
  const [timeStatus, setTimeStatus] = useState<"short" | "normal" | "over">("normal");
  const [isTimeVisible, setIsTimeVisible] = useState(true);

  const blinkLight = () => {
    let count = 0;
    setIsTimeVisible((v) => !v);
    const interval = setInterval(() => {
      setIsTimeVisible((v) => !v);
      count++;
      if (count >= 9) clearInterval(interval);
    }, 100);
  };
  useEffect(() => {
    let seconds = 120;
    setTime(formatTime(seconds));
    const interval = setInterval(() => {
      seconds -= 1;
      setTime(formatTime(seconds));
      if (seconds === 31 && timeStatus !== "short") {
        blinkLight();
      }
      if (seconds === 30 && timeStatus !== "short") {
        setTimeStatus("short");
      }
      if (seconds <= 0) {
        setTimeStatus("over");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(sec: number) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  return <TimeContext.Provider value={{ time, timeStatus, isTimeVisible }}>{children}</TimeContext.Provider>;
}
