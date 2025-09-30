import AlertIcon from "@public/alert.svg";
import { AttentionMessageProps } from "./types";
const AttentionMessage = ({ children, className }: AttentionMessageProps) => {
  return (
    <div className={`content__attention bg-[#2d3233] rounded-3xl pl-[16] pr-[20px] py-[16px] max-w-[500] flex flex-row items-center ${className}`}>
      <span className="mr-3">
        <img src="/alert.svg" className="w-[40] h-[40]" />
      </span>
      <p className="tracking-wide">{children}</p>
    </div>
  );
};

export default AttentionMessage;
