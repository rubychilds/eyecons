import { IconProps } from '../types';

export const Slash = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.46033 14H4.10779L9.46521 1H10.8177L5.46033 14Z" fill={color}/>
  </svg>
);
