interface RightArrowProps {
  fill: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill={fill}
  >
    <mask
      id="mask0_974_495"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="80"
      height="80"
      style={{ maskType: 'alpha' }}
    >
      <rect width="80.0001" height="80" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_974_495)">
      <path
        d="M53.9169 43.3333H13.3335V36.6666H53.9169L35.2502 17.9999L40.0002 13.3333L66.6669 39.9999L40.0002 66.6666L35.2502 61.9999L53.9169 43.3333Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default RightArrow;
