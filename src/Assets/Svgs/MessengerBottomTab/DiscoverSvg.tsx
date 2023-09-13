import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={scale(size)} height={scale(size)} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12.5 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12Zm5.842 6.507a.8.8 0 0 0-1.002-.319l-.097.05-6.122 3.718a2 2 0 0 0-.565.512l-.107.16-3.71 6.115-.05.097a.8.8 0 0 0 .23.94l.088.062.1.052a.8.8 0 0 0 .642-.005l.1-.054 6.061-3.802a2 2 0 0 0 .53-.483l.102-.149 3.793-6.053a.8.8 0 0 0 .007-.84Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
