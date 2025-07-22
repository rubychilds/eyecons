import { IconProps } from '../types';

export const Columns = ({ 
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
    <path d="M2.15079 14H0.850006V1H2.15079V14ZM6.15079 14H4.85001V1H6.15079V14ZM10.1508 14H8.85001V1H10.1508V14ZM14.1508 14H12.85V1H14.1508V14Z" fill={color}/>
  </svg>
);
