import * as React from "react";

function SvgLike(props) {
  return (
    <svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.758 1.547a5.93 5.93 0 018.376.397 7.185 7.185 0 01.01 9.658l-3.675 4.054L11.124 22l-2.561-2.816-6.464-7.055.024-.027-.26-.287a7.17 7.17 0 010-9.648 5.964 5.964 0 018.801-.026l.26.283.436-.48a5.93 5.93 0 01.194-.203z"
        fill="#F03636"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLike;
