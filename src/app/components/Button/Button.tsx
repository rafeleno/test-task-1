import AlertIcon from "@public/alert.svg";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";
const Button = ({ children, size = "medium", className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={
        "bg-[#fdb056] py-5 flex flex-col align-items-center rounded-[20] font-bold text-xl text-[#191e1f] leading-[130%] transition-opacity duration-150" +
        " " +
        (size === "small" ? "w-50" : size === "medium" ? "w-[352]" : "w-full") +
        " " +
        className +
        " " +
        (disabled ? "opacity-50 cursor-not-allowed" : "")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
