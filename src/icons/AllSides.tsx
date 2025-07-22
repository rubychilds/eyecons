import { IconProps } from '../types';

export const AllSides = ({ 
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
    <path d="M7.5 14.25L5.25 12H9.75L7.5 14.25ZM3 9.75L0.75 7.5L3 5.25V9.75ZM14.25 7.5L12 9.75V5.25L14.25 7.5ZM9.75 3H5.25L7.5 0.75L9.75 3Z" fill={color}/>
  </svg>
);
