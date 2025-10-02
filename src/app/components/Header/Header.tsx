"use client";

import { JSX, useContext, useEffect, useState } from "react";
import { HeaderView } from "./HeaderView";
import { HeaderProps } from "./types";
import { createContext } from "react";
import { TimeContext } from "@/app/services/TimeContext";

export const Header = (): JSX.Element => {
  const ctx = useContext(TimeContext);
  return <HeaderView time={ctx?.time} timeStatus={ctx?.timeStatus} isTimeVisible={ctx?.isTimeVisible} />;
};
