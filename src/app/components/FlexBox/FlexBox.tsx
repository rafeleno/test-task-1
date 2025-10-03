import AlertIcon from "@public/alert.svg";
import { FlexBoxProps } from "./types";
import styles from "./styles.module.css";

const FlexBox = ({ elements, className, direction = "horizontal", size = "medium", isTransparent = false }: FlexBoxProps) => {
  return (
    <div
      className={`
        ${styles.container}
        ${direction === "vertical" ? styles.vertical : styles.horizontal}
        ${styles[size]}
        ${isTransparent ? styles.transparent : ""}
        ${className}
        `}
    >
      {elements}
    </div>
  );
};

export default FlexBox;
