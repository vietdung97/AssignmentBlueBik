import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import React, { forwardRef, memo } from 'react';
import { AppFonts, CommonColors, FontSizes, ResponsiveStyleSheet } from '@/Theme';
import { scale } from 'react-native-size-scaling';

export interface AppInputProps extends TextInputProps {
  fontWeight?: keyof typeof AppFonts | string;
  fontSize?: number | keyof typeof FontSizes;
  color?: string;
  lineHeightRatio?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
  useDefaultFont?: boolean;
}

const AppInput = forwardRef(
  (
    {
      fontWeight = 400,
      fontSize = 'normal',
      color = CommonColors.typography,
      placeholderTextColor = CommonColors.placeholder,
      lineHeightRatio,
      lineHeight,
      style,
      align = 'left',
      useDefaultFont = false,
      ...restProps
    }: AppInputProps,
    ref: React.LegacyRef<TextInput>,
  ) => {
    const size = typeof fontSize === 'string' ? FontSizes[fontSize] : fontSize;
    const textStyles = {
      fontFamily: useDefaultFont ? undefined : typeof fontWeight === 'string' ? fontWeight : AppFonts[fontWeight],
      color,
      fontSize: scale(size),
      ...(lineHeightRatio && {
        lineHeight: scale(size * lineHeightRatio),
      }),
      ...(lineHeight && { lineHeight: scale(lineHeight) }),
      textAlign: align,
    };
    return (
      <TextInput
        ref={ref}
        style={[styles.base, textStyles, style]}
        placeholderTextColor={placeholderTextColor}
        {...restProps}
      />
    );
  },
);

export default memo(AppInput);

const styles = ResponsiveStyleSheet.create({
  base: {
    color: CommonColors.typography,
    skipResponsive: true,
  },
});
