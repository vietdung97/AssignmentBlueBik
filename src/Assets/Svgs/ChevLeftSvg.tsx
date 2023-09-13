import { CommonColors } from "@/Theme"
import * as React from "react"
import { scale } from "react-native-size-scaling"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg
    width={scale(size)}
    height={scale(size)}
    fill="none"
  >
    <Path
      stroke="#353535"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.5 19-7-7 7-7"
    />
  </Svg>
)
export default SvgComponent