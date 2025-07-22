export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: { [key: string]: any };
  onClick?: () => void;
  [key: string]: any;
}