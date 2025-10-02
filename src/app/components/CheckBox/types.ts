export interface CheckBoxProps {
  children: React.ReactNode;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}
