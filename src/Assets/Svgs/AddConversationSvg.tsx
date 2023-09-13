import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg width={scale(size)} height={scale(size)} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.264 3.24A1.755 1.755 0 0 0 19.26.76l-.128-.116a1.745 1.745 0 0 0-2.343.12L8.32 9.278a6 6 0 0 0-1.562 2.756l-.35 1.378.007.053a.2.2 0 0 0 .193.147l1.34-.307a6 6 0 0 0 2.911-1.617l8.404-8.449ZM9.25 3.563a.75.75 0 0 0-.75-.75H4l-.184.006A3.25 3.25 0 0 0 .75 6.064v10l.005.185A3.25 3.25 0 0 0 4 19.315h10l.184-.006a3.25 3.25 0 0 0 3.066-3.245l-.006-4.5a.75.75 0 0 0-.75-.75H15.5a.75.75 0 0 0-.75.75v4.5l-.007.102a.75.75 0 0 1-.743.648H4l-.102-.006a.75.75 0 0 1-.648-.744v-10l.007-.101A.75.75 0 0 1 4 5.314l4.5-.005a.75.75 0 0 0 .75-.75v-.995Z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
