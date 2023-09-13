import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg width={scale(size)} height={scale(size)} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M11.655.25a2 2 0 0 1 1.357.53L14.3 1.97a2 2 0 0 0 1.17.521l.187.009h.593a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H3.75A3.5 3.5 0 0 1 .25 14V6a3.5 3.5 0 0 1 3.5-3.5h.593A2 2 0 0 0 5.7 1.97L6.988.78A2 2 0 0 1 8.344.25h3.312ZM10 4.75a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
