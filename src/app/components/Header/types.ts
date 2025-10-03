export type TTimeStatus = "normal" | "short" | "over" | undefined;

export interface HeaderViewProps {
  time: string | undefined;
  timeStatus: TTimeStatus;
  isTimeVisible: boolean | undefined;
}

export type HeaderProps = HeaderViewProps;
