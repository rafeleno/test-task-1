import AlertIcon from "@public/alert.svg";
import styles from "./styles.module.css";
import { CheckBoxProps } from "./types";
const CheckBox = ({ children, isChecked, className, onChange }: CheckBoxProps) => {
  return (
    <div className={`${isChecked ? styles.checkBox + " " + styles.active : styles.checkBox + " " + className}`}>
      <input type="checkbox" checked={isChecked} id="policyCheckbox" className="mr-2 hidden" onChange={(e) => onChange(e.target.checked)} />
      <label htmlFor="policyCheckbox" className="grid place-items-center gap-[12] grid-cols-[32px_1fr]" onClick={(e) => e.preventDefault()}>
        <div className={styles.button} onClick={() => onChange(!isChecked)}></div>
        <span className="leading-5">{children}</span>
      </label>
    </div>
  );
};
export default CheckBox;
