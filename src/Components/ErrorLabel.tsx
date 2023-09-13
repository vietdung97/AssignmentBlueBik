import { CommonColors } from '@/Theme';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import AppText from './AppText';
import { scale } from 'react-native-size-scaling';
interface ErrorLabelProps {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const ErrorLabel = ({ text, containerStyle, textStyle }: ErrorLabelProps) => {
  return (
    <Animated.View style={[{ paddingTop: scale(6) }, containerStyle]} entering={FadeIn}>
      <AppText fontSize={12} color={CommonColors.error} style={textStyle}>
        {text}
      </AppText>
    </Animated.View>
  );
};

export default ErrorLabel;
