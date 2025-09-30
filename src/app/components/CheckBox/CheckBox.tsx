import AlertIcon from "@public/alert.svg";
import styles from "./styles.module.css";
import { CheckBoxProps } from "./types";
const CheckBox = ({ children, isChecked, onChange }: CheckBoxProps) => {
  return (
    <div className={`${isChecked ? styles.checkBox + " " + styles.active : styles.checkBox}`}>
      <input type="checkbox" checked={isChecked} id="policyCheckbox" className="mr-2 hidden" onChange={(e) => onChange(e.target.checked)} />
      <label htmlFor="policyCheckbox" className={styles.label}>
        <span className={styles.content}>{children}</span>
      </label>
    </div>
  );
};

export default CheckBox;
