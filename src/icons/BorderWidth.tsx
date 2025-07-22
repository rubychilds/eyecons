import { IconProps } from '../types';

export const BorderWidth = ({ 
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
    <path d="M14 12.75H1V10.25H14V12.75ZM14 8H1V6H14V8ZM14 4H1V3H14V4Z" fill={color}/>
  </svg>
);
