import { AppFonts, CommonColors, FontSizes } from '@/Theme';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { scale } from 'react-native-size-scaling';

export interface AppTextProps extends TextProps {
  children: React.ReactNode;
  fontWeight?: keyof typeof AppFonts | string;
  fontSize?: number | keyof typeof FontSizes;
  color?: string;
  lineHeightRatio?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
  useDefaultFont?: boolean;
  regexMetion?: boolean;
  onMentionPress?: (username: string) => void;
}

const AppText = ({
  children,
  fontWeight = 400,
  fontSize = 'normal',
  color = CommonColors.black,
  lineHeightRatio,
  lineHeight,
  style,
  align = 'left',
  useDefaultFont = false,
  regexMetion = false,
  onMentionPress,
  // parse = [],
  ...restProps
}: AppTextProps) => {
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
  return Array.isArray(children) ? (
    <Text {...restProps} style={[styles.base, textStyles, style]}>
      {children.map((child, idx) => (
        <React.Fragment key={`${child}_${idx}`}>
          {typeof child === 'string' ? (
            <Text {...restProps} style={[styles.base, textStyles, style]}>
              {child}
            </Text>
          ) : (
            child
          )}
        </React.Fragment>
      ))}
    </Text>
  ) : (
    <Text {...restProps} style={[styles.base, textStyles, style]}>
      {children}
    </Text>
  );
};

export default memo(AppText);

const styles = StyleSheet.create({
  base: {
    color: CommonColors.black,
  },
});
