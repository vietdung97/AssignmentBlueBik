import { CommonColors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ size = 24, color = CommonColors.black }) => (
  <Svg width={scale(size)} height={scale(size)} fill="none">
    <Path
      fill="#F2F2F2"
      fillRule="evenodd"
      d="M3.526 3.687C4.533 2.606 5.969 2 7.665 2h8.669c1.7 0 3.136.606 4.143 1.687C21.48 4.762 22 6.247 22 7.917v8.167c0 1.669-.521 3.154-1.523 4.23C19.47 21.395 18.034 22 16.333 22H7.665c-1.7 0-3.136-.605-4.143-1.687-1-1.075-1.522-2.56-1.522-4.229V7.916c0-1.669.524-3.154 1.526-4.23Zm1.097 1.022c-.7.752-1.123 1.85-1.123 3.207v8.168c0 1.359.421 2.457 1.12 3.207.693.745 1.715 1.21 3.045 1.21h8.668c1.33 0 2.353-.465 3.046-1.21.7-.75 1.121-1.848 1.121-3.207V7.916c0-1.358-.422-2.456-1.12-3.207-.694-.745-1.716-1.209-3.046-1.209H7.665c-1.325 0-2.347.464-3.042 1.21Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
