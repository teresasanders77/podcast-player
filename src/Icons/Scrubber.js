import * as React from "react";

function SvgScrubber(props) {
  return (
    <svg
      width={231}
      height={21}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M2.394 9.596h145.692a1.404 1.404 0 110 2.808H2.394a1.404 1.404 0 110-2.808z"
          id="scrubber_svg__a"
        />
        <path
          d="M150.97 9.596h78.592a1.404 1.404 0 010 2.808h-78.591a1.404 1.404 0 010-2.808z"
          id="scrubber_svg__b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fill="#000">
          <use xlinkHref="#scrubber_svg__a" />
          <use
            style={{
              mixBlendMode: "overlay",
            }}
            xlinkHref="#scrubber_svg__a"
          />
        </g>
        <use fillOpacity={0.2} fill="#000" xlinkHref="#scrubber_svg__b" />
        <use
          fill="#8B8B8B"
          style={{
            mixBlendMode: "overlay",
          }}
          xlinkHref="#scrubber_svg__b"
        />
        <circle fill="#6BE0CB" cx={158.864} cy={10.725} r={9.9} />
      </g>
    </svg>
  );
}

export default SvgScrubber;
