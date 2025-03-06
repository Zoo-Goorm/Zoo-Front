import React from 'react'

interface LeftArrowProps {
  fill: string // fill 속성에 대한 타입 정의
}

const LeftArrow: React.FC<LeftArrowProps> = ({ fill }) => (
  <svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.40018 4.5L0.333496 1.43333L1.26683 0.5L5.26685 4.5L1.26683 8.5L0.333496 7.56667L3.40018 4.5Z" />
  </svg>
)

export default LeftArrow
