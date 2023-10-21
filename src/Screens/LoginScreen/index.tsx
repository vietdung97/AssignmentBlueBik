import { screenHeight, screenWidth } from '@/Theme';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedProps, useSharedValue } from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';
import { ILoginProps } from './prop';
import { set } from 'react-hook-form';
Animated.addWhitelistedUIProps({ d: true });
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Vector {
  cx: number;
  cy: number;
}

const LoginScreen = (props: ILoginProps) => {
  const [paths, setPath] = React.useState<any>([]);
  const path = useSharedValue('');

  const addPath = (p: any) => {
    setPath(prev => [...prev, p]);
  };

  const scalarMultiplyVector = (vectorA: Vector, vectorB: Vector) => vectorA.cx * vectorB.cx + vectorA.cy * vectorB.cy;

  const lengthMultiplyVector = (vectorA: Vector, vectorB: Vector) => {
    const powVectorA = Math.pow(vectorA.cx, 2) + Math.pow(vectorA.cy, 2);
    const powVectorB = Math.pow(vectorB.cx, 2) + Math.pow(vectorB.cy, 2);
    return Math.sqrt(powVectorA * powVectorB);
  };

  React.useEffect(() => {
    const [pointA, pointB, pointC] = paths;
    if (pointA && pointB && pointC) {
      const vectorBA = { cx: pointA.cx - pointB.cx, cy: pointA.cy - pointB.cy };
      const vectorBC = { cx: pointC.cx - pointB.cx, cy: pointC.cy - pointB.cy };
      const radian = Math.acos(scalarMultiplyVector(vectorBA, vectorBC) / lengthMultiplyVector(vectorBA, vectorBC));
      Alert.alert('Angle', `${(radian * 180) / Math.PI}deg`, [{
        text: 'OK',
        onPress: () => {
          setPath([]);
          path.value = '';
        },
      }]);
  
    }
  }, [paths]);

  const gesture = Gesture.Tap()
    .maxDistance(1)
    .onStart(e => {
      console.log('onStart', e);
      const { absoluteX, absoluteY } = e;
      const movePath = `M${absoluteX} ${absoluteY} `;
      if (path.value === '') {
        path.value = movePath;
      } else {
        path.value += `L${absoluteX} ${absoluteY} Z ${movePath}`;
      }
      runOnJS(addPath)({
        cx: absoluteX,
        cy: absoluteY,
      });
    });

  const pathProps = useAnimatedProps(() => ({
    d: path.value,
    strokeWidth: 1,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Svg
        style={StyleSheet.absoluteFill}
        height={screenHeight}
        width={screenWidth}
        viewBox={`0 0 ${screenWidth} ${screenHeight}`}>
        {paths.map((p: any, index: number) => {
          return <Circle key={index} fill="red" cx={p.cx} cy={p.cy} r="4" />;
        })}
        <AnimatedPath fill="red" stroke="red" animatedProps={pathProps} />
      </Svg>
    </GestureDetector>
  );
};

export default React.memo(LoginScreen);
