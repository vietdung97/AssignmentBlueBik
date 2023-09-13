import { useAppTheme } from '@/Hooks';
import { Layout, ResponsiveStyleSheet, Spacing } from '@/Theme';
import React, { memo, useMemo } from 'react';
import { StatusBar, StatusBarProps, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  disableTop?: boolean;
  disableBottom?: boolean;
  statusBarProps?: StatusBarProps;
  useFading?: boolean;
  containerStyle?: ViewStyle;
  safeAreaStyle?: ViewStyle;
  safeAreaColor?: string;
}

const Container = ({
  children,
  disableTop = false,
  disableBottom = true,
  statusBarProps,
  safeAreaColor,
  safeAreaStyle,
  useFading = false,
  style,
  containerStyle,
}: ContainerProps) => {
  const { Colors } = useAppTheme();
  const safeEdges = useMemo<ReadonlyArray<Edge>>(() => {
    if (!disableTop && !disableBottom) {
      return ['top', 'bottom', 'left', 'right'];
    } else if (!disableTop) {
      return ['top', 'left', 'right'];
    } else if (!disableBottom) {
      return ['bottom'];
    } else {
      return ['left', 'right'];
    }
  }, [disableTop, disableBottom]);
  return (
    <SafeAreaView
      edges={safeEdges}
      style={[
        Layout.fill,
        safeAreaStyle,
        {
          backgroundColor: safeAreaColor ?? containerStyle?.backgroundColor ?? style?.backgroundColor,
        },
      ]}>
      <LinearGradient colors={['#c2e59c', '#64b3f4']} style={{ flex: 1 }}>
        <Animated.View
          entering={useFading ? FadeIn : undefined}
          style={[
            styles.container,
            {
              // backgroundColor: Colors.background,
            },
            containerStyle,
          ]}>
          <StatusBar translucent backgroundColor={Colors.background} barStyle="dark-content" {...statusBarProps} />
          <View
            style={[
              styles.container,
              {
                // backgroundColor: Colors.background,
              },
              style,
            ]}>
            {children}
          </View>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default memo(Container);

const styles = ResponsiveStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.s,
  },
  bar: {
    width: '100%',
  },
});
