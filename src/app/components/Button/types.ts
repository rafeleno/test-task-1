export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "full";
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}
