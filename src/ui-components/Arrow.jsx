/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Arrow(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="198.08px"
      height="180.11px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 198, height: 180 }}
      paths={[
        {
          d: "M0 -11C-6.07513 -11 -11 -6.07513 -11 0C-11 6.07513 -6.07513 11 0 11L0 -11ZM150.592 99.8274C153.534 105.143 160.228 107.066 165.543 104.124C170.858 101.182 172.782 94.4877 169.84 89.1726L150.592 99.8274ZM0 11C64.8067 11 121.259 46.8371 150.592 99.8274L169.84 89.1726C136.788 29.4649 73.1271 -11 0 -11L0 11Z",
          stroke: "rgba(204,237,239,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 22,
          style: { transform: "translate(0%, 62.9%)" },
        },
        {
          d: "M80 80L80 91C86.0751 91 91 86.0751 91 80L80 80ZM69 0L69 80L91 80L91 0L69 0ZM80 69L0 69L0 91L80 91L80 69Z",
          stroke: "rgba(204,237,239,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 22,
          style: { transform: "translate(84.95px, 67.37px)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Arrow")}
    ></Icon>
  );
}
