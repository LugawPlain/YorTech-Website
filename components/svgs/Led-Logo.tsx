import * as React from "react";
import { SVGProps } from "react";
const LedLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="#fff"
    stroke="#fff"
    viewBox="-51.2 -51.2 614.4 614.4"
    {...props}
  >
    <rect
      width={614.4}
      height={614.4}
      x={-51.2}
      y={-51.2}
      stroke="none"
      strokeWidth={0}
      rx={307.2}
    />
    <path
      className="group-hover:fill-green-700 duration-300 transition-all group-active:fill-red-500 group-active:duration-0"
      fill="#000"
      d="M256 20.5c-45.5 0-74.137 18.276-92.676 44.23C144.784 90.685 137 125 137 155.5v151h238v-151c0-30.5-7.785-64.815-26.324-90.77C330.136 38.776 301.5 20.5 256 20.5zm8.756 11.885c1.285 0 2.554.018 3.812.047A184 235.5 0 0 0 145.91 160.336c1.113-28.645 9.045-59.746 26.17-83.72 18.54-25.955 47.176-44.23 92.676-44.23zM105 324.5v46h302v-46H105zm78 64v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18zm128 0v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18z"
    />
  </svg>
);
export default LedLogo;
