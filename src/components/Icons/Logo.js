import * as React from "react";

function SvgLogo(props) {
  return (
    <svg width={70} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <text
          fontFamily="BigNoodleTitling"
          fontSize={14}
          letterSpacing={1.711}
          fill="#000"
        >
          <tspan x={24} y={17}>
            {"Podlife"}
          </tspan>
        </text>
        <g transform="translate(-.265 4.398)">
          <path d="M5 12c2.424 2.667 5.091 2.667 8 0" stroke="#000" />
          <circle fill="#000" cx={6.265} cy={7.602} r={2} />
          <path d="M1 6.571h0z" stroke="#979797" />
          <circle fill="#000" cx={12.265} cy={7.602} r={2} />
          <path
            d="M1.064 8.495C3.703 4.07-.059 0 9.104 0c9.161 0 5.914 3.833 8.039 8.561"
            stroke="#000"
          />
          <rect fill="#000" x={0.265} y={5.602} width={3} height={4} rx={1} />
          <rect fill="#000" x={15.265} y={5.602} width={3} height={4} rx={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgLogo;
