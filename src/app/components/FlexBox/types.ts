export interface FlexBoxProps {
  elements: React.ReactNode[];
  className?: string;
  direction?: "vertical" | "horizontal";
  size?: "medium" | "large";
  isTransparent?: boolean;
}
