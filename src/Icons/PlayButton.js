import * as React from "react";

function SvgPlayButton(props) {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle
          stroke="#000"
          strokeWidth={0.864}
          transform="rotate(-180 11.52 11.52)"
          cx={11.52}
          cy={11.52}
          r={11.52}
        />
        <path
          d="M9.04 17.978c.088.04.192.025.265-.042l6.44-5.875a.259.259 0 000-.382l-6.44-5.875a.243.243 0 00-.266-.042.256.256 0 00-.145.233v11.75c0 .1.057.191.145.233"
          fill="#000"
        />
      </g>
    </svg>
  );
}

export default SvgPlayButton;
