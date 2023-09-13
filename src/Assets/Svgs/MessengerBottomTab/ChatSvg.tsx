import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={scale(size)} height={scale(size)} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12.5 23c6.627 0 12-5.149 12-11.5S19.127 0 12.5 0 .5 5.149.5 11.5c0 1.71.44 3.508 1.32 5.393l.196.406a5 5 0 0 1 .096 4.246c-.557 1.261-.652 2.044-.284 2.35.402.336 1.56.075 3.475-.784l.517-.237a5 5 0 0 1 3.166-.367l.266.064c1.058.286 2.14.429 3.248.429Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
