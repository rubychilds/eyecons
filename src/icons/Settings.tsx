import { IconProps } from '../types';

export const Settings = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M12 1v6m0 6v6m11-7h-6m-6 0H1m19.5-7.5l-4.5 4.5m-6-6L5.5 6.5M19.5 17.5l-4.5-4.5m-6 6L5.5 17.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);