import { JSX } from "react";
import { Mulish } from "next/font/google";
import { HeaderViewProps } from "../types";
import styles from "./styles.module.css";
const mulish = Mulish({
  weight: "700",
});
export const HeaderView = ({ time, timeStatus, isTimeVisible }: HeaderViewProps): JSX.Element => {
  return (
    <header className="bg-[#1d5b43] p-[8_16_8_16] md:p-4 xl:p-5 flex flex-col place-items-center font-bold text-xl text-[#191e1f] leading-[130%]">
      <h1 className="text-[15px] md:text-2xl mb-2 md:mb-3 text-white">Успейте открыть пробную неделю</h1>
      <p
        className={`${!isTimeVisible ? styles.hidden + " " : ""} ${
          timeStatus === "short" ? styles.shortTime + " " + styles.time : timeStatus === "over" ? styles.timeIsOver + " " + styles.time : styles.time
        } ${mulish.className}`}
      >
        {time}
      </p>
    </header>
  );
};
