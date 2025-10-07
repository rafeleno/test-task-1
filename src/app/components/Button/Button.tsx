import { ButtonProps } from "./types";
export const Button = ({ children, size = "medium", className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={
        "bg-[#fdb056] py-5 flex flex-col align-items-center rounded-[20] font-bold text-[18px] md:text-xl text-[#191e1f] leading-[130%] transition-opacity duration-100" +
        " " +
        (size === "small" ? "w-50" : size === "medium" ? "max-w-[352] w-[100%]" : "w-full") +
        " " +
        className +
        " " +
        (disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#fdb056]/[.8] active:bg-[#fdb056]/[.65] cursor-pointer")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
