import { Layout } from '@/Theme';
import React, { forwardRef, memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { scale } from 'react-native-size-scaling';

interface BoxProps {
  children?: React.ReactNode;
  fill?: boolean;
  flex?: number;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  backgroundColor?: string;
  opacity?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  reverse?: boolean;
  row?: boolean;
  center?: boolean;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  height?: number | string;
  width?: number | string;
  size?: number;
  maxHeight?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  radius?: number;
  topLeftRadius?: number;
  topRightRadius?: number;
  bottomLeftRadius?: number;
  bottomRightRadius?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTopColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderWidth?: number;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
}

const Box = forwardRef(
  (
    {
      children,
      fill,
      flex,
      align,
      flexWrap,
      justify,
      center,
      reverse,
      alignSelf,
      row,
      style,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      backgroundColor,
      height,
      maxHeight,
      minHeight,
      maxWidth,
      minWidth,
      width,
      opacity,
      size,
      radius,
      topLeftRadius,
      topRightRadius,
      bottomLeftRadius,
      bottomRightRadius,
      overflow,
      borderBottomColor,
      borderBottomWidth,
      borderLeftColor,
      borderLeftWidth,
      borderRightColor,
      borderRightWidth,
      borderTopColor,
      borderTopWidth,
      borderColor,
      borderWidth,
      ...restProps
    }: BoxProps,
    ref: React.ForwardedRef<View>,
  ) => {
    return (
      <View
        {...restProps}
        ref={ref}
        style={
          [
            style,
            row ? (reverse ? Layout.rowReverse : Layout.row) : reverse ? Layout.columnReverse : Layout.column,
            center && Layout.center,
            fill && Layout.fill,
            flex && { flex },
            opacity && { opacity },
            (height || size) && {
              height: size ? scale(size) : typeof height === 'string' ? height : scale(height),
            },
            (width || size) && {
              width: size ? scale(size) : typeof width === 'string' ? width : scale(width),
            },
            maxHeight && {
              maxHeight: typeof maxHeight === 'string' ? maxHeight : scale(maxHeight),
            },
            minHeight && {
              minHeight: typeof minHeight === 'string' ? minHeight : scale(minHeight),
            },
            maxWidth && {
              maxWidth: typeof maxWidth === 'string' ? maxWidth : scale(maxWidth),
            },
            minWidth && {
              minWidth: typeof minWidth === 'string' ? minWidth : scale(minWidth),
            },
            backgroundColor && { backgroundColor },
            align && { alignItems: align },
            justify && { justifyContent: justify },
            alignSelf && { alignSelf },
            flexWrap && { flexWrap },
            radius && { borderRadius: scale(radius) },
            overflow && { overflow },
            topLeftRadius && {
              borderTopLeftRadius: scale(topLeftRadius),
            },
            topRightRadius && {
              borderTopRightRadius: scale(topRightRadius),
            },
            bottomLeftRadius && {
              borderBottomLeftRadius: scale(bottomLeftRadius),
            },
            bottomRightRadius && {
              borderBottomRightRadius: scale(bottomRightRadius),
            },
            paddingBottom && {
              paddingBottom: scale(paddingBottom),
            },
            paddingLeft && { paddingLeft: scale(paddingLeft) },
            paddingRight && { paddingRight: scale(paddingRight) },
            paddingTop && { paddingTop: scale(paddingTop) },
            padding && { padding: scale(padding) },
            paddingHorizontal && {
              paddingHorizontal: scale(paddingHorizontal),
            },
            paddingVertical && {
              paddingVertical: scale(paddingVertical),
            },
            marginBottom && { marginBottom: scale(marginBottom) },
            marginLeft && { marginLeft: scale(marginLeft) },
            marginRight && { marginRight: scale(marginRight) },
            marginTop && { marginTop: scale(marginTop) },
            margin && { margin: scale(margin) },
            marginHorizontal && {
              marginHorizontal: scale(marginHorizontal),
            },
            marginVertical && {
              marginVertical: scale(marginVertical),
            },
            borderTopWidth && {
              borderTopWidth: scale(borderTopWidth),
            },
            borderBottomWidth && {
              borderBottomWidth: scale(borderBottomWidth),
            },
            borderLeftWidth && {
              borderLeftWidth: scale(borderLeftWidth),
            },
            borderRightWidth && {
              borderRightWidth: scale(borderRightWidth),
            },
            borderTopColor && { borderTopColor },
            borderBottomColor && { borderBottomColor },
            borderLeftColor && { borderLeftColor },
            borderRightColor && { borderRightColor },
            borderColor && { borderColor },
            borderWidth && { borderWidth: scale(borderWidth) },
          ] as any
        }>
        {children}
      </View>
    );
  },
);

export default memo(Box);
