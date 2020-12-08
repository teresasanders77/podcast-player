import * as React from "react";

function SvgBackButton(props) {
  return (
    <svg width={15} height={26} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.5 24.5L1.5 13l12-11.5"
        stroke="#000"
        strokeWidth={1.98}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgBackButton;
