import { StyleProp, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { scale } from 'react-native-size-scaling';
interface PaddingProps {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  padding?: number;
  horizontal?: number;
  vertical?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
const Padding = ({
  bottom = 0,
  left = 0,
  right = 0,
  top = 0,
  padding = 0,
  horizontal = 0,
  vertical = 0,
  children,
  style,
  ...restProps
}: PaddingProps) => {
  return (
    <View
      {...restProps}
      style={[
        style,
        {
          ...(bottom && {
            paddingBottom: scale(bottom),
          }),
          ...(left && { paddingLeft: scale(left) }),
          ...(right && { paddingRight: scale(right) }),
          ...(top && { paddingTop: scale(top) }),
          ...(padding && { padding: scale(padding) }),
          ...(horizontal && {
            paddingHorizontal: scale(horizontal),
          }),
          ...(vertical && {
            paddingVertical: scale(vertical),
          }),
        },
      ]}>
      {children}
    </View>
  );
};

export default memo(Padding);
