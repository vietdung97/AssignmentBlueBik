import { Layout } from '@/Theme';
import React, { memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
interface RowProps {
  children: React.ReactNode;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  reverse?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Row = ({ children, reverse, align = 'center', justify, style, ...restProps }: RowProps) => {
  return (
    <View
      {...restProps}
      style={[
        reverse ? Layout.rowReverse : Layout.row,
        style,
        align && { alignItems: align },
        justify && { justifyContent: justify },
      ]}>
      {children}
    </View>
  );
};

export default memo(Row);
