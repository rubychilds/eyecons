import { IconProps } from '../types';

export const TriangleRight = ({ 
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
    <path d="M10.5 7.5L6 11L6 4L10.5 7.5Z" fill={color}/>
  </svg>
);
