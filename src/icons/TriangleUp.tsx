import { IconProps } from '../types';

export const TriangleUp = ({ 
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
    <path d="M7.5 4.5L4 9H11L7.5 4.5Z" fill={color}/>
  </svg>
);
