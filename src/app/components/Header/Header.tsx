"use client";

import { JSX, useContext } from "react";
import { HeaderView } from "./ui/HeaderView";
import { TimeContext } from "@/app/services/TimeContext";

export const Header = (): JSX.Element => {
  const ctx = useContext(TimeContext);
  return <HeaderView time={ctx?.time} timeStatus={ctx?.timeStatus} isTimeVisible={ctx?.isTimeVisible} />;
};
