import { CommonColors, ResponsiveStyleSheet } from '@/Theme';
import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText, { AppTextProps } from './AppText';
import Padding from './Padding';
import { scale } from 'react-native-size-scaling';

export interface AppButtonProps {
  text?: string;
  icon?: ImageSourcePropType;
  svgIcon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  colors?: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  textColor?: string;
  textSize?: number;
  textWeight?: AppTextProps['fontWeight'];
  textLineHeight?: number;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  opacity?: number;
  iconDirection?: 'left' | 'right';
  spaceBetween?: boolean;
  style?: StyleProp<ViewStyle> | ViewStyle;
  radius?: number;
  spacing?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowSize?: number;
  center?: boolean;
}

const AppButton = ({
  radius = 8,
  backgroundColor = CommonColors.primary,
  colors,
  disabled,
  disabledBackgroundColor = CommonColors.k8E8E8E,
  disabledTextColor = CommonColors.white,
  icon,
  svgIcon,
  iconStyle,
  onPress,
  opacity = 0.8,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  text,
  textStyle,
  iconDirection = 'right',
  textColor = CommonColors.background,
  spaceBetween,
  style,
  spacing = 10,
  center = true,
  textSize = 16,
  textWeight = 600,
  textLineHeight = 24,
  ...restProps
}: AppButtonProps) => {
  const styles = ResponsiveStyleSheet.create({
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: spaceBetween ? 'space-between' : center ? 'center' : 'flex-start',
      paddingHorizontal: 16,
      height: 48,
      borderRadius: radius,
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      overflow: 'hidden',
    },
    baseTxt: {
      color: disabled ? disabledTextColor : textColor,
    },
    btnBg: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
    },
    baseIc: {
      height: 24,
      width: 24,
    },
  });
  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      style={[styles.baseBtn, style]}
      activeOpacity={opacity}
      onPress={onPress}>
      {!!colors && (
        <LinearGradient
          style={styles.btnBg}
          colors={disabled ? [disabledBackgroundColor, disabledBackgroundColor] : colors}
          start={start}
          end={end}
        />
      )}
      <AppText
        lineHeight={textLineHeight}
        fontSize={textSize}
        fontWeight={textWeight}
        style={[styles.baseTxt, textStyle]}>
        {text}
      </AppText>
      {(!!icon || !!svgIcon) && (
        <>
          <Padding left={scale(spacing)} />
          {svgIcon ?? <Image source={icon as ImageSourcePropType} style={[styles.baseIc, iconStyle]} />}
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(AppButton);
