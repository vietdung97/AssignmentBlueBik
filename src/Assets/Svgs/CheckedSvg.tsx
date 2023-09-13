import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg width={scale(size)} height={scale(size)} fill="none">
    <Path
      fill="#353535"
      fillRule="evenodd"
      d="M7.665 2c-1.696 0-3.132.606-4.139 1.687C2.524 4.762 2 6.247 2 7.917v8.167c0 1.669.521 3.154 1.522 4.23C4.53 21.393 5.965 22 7.665 22h8.668c1.7 0 3.137-.605 4.144-1.686C21.479 19.238 22 17.753 22 16.084V7.916c0-1.668-.521-3.154-1.523-4.229C19.47 2.606 18.034 2 16.334 2H7.665Zm8.425 8.158a.75.75 0 0 0-1.06-1.061l-4.217 4.216L8.97 11.47a.75.75 0 0 0-1.06 1.06l2.373 2.374a.75.75 0 0 0 1.06 0l4.747-4.746Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
