export interface HeaderViewProps {
  time: string | undefined;
  timeStatus: "short" | "normal" | "over" | undefined;
  isTimeVisible: boolean | undefined;
}

export interface HeaderProps {
  time: string;
  timeStatus: "normal" | "short" | "over";
  isTimeVisible: boolean;
}
