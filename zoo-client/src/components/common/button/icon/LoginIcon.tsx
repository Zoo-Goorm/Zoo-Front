interface LoginIconProps {
  fill: string;
}

const LoginIcon: React.FC<LoginIconProps> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill={fill}
  >
    <mask
      id="mask0_974_595"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="33"
      height="32"
    >
      <rect x="0.5" width="32.0001" height="32" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_974_595)">
      <path
        d="M4.5 24V21.3333H12.5V24H4.5ZM4.5 17.3333V14.6667H20.5V17.3333H4.5ZM4.5 10.6667V8H28.5001V10.6667H4.5Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default LoginIcon;
