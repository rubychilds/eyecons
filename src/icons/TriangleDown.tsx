import { IconProps } from '../types';

export const TriangleDown = ({ 
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
    <path d="M7.5 10.5L4 6H11L7.5 10.5Z" fill={color}/>
  </svg>
);
