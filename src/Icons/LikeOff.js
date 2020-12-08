import * as React from "react";

function SvgLikeOff(props) {
  return (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.689 1.406a5.39 5.39 0 017.615.362 6.531 6.531 0 01.008 8.779l-3.33 3.675L10.112 20l-2.315-2.547-5.889-6.426.022-.025-.237-.26a6.519 6.519 0 010-8.772 5.422 5.422 0 018.002-.024l.236.257.396-.435a5.39 5.39 0 01.177-.185z"
        fill="#8F8F8F"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLikeOff;
