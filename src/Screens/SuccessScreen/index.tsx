import AppText from '@/Components/AppText';
import Container from '@/Components/Container';
import Padding from '@/Components/Padding';
import { FontSizes, Layout, ResponsiveStyleSheet } from '@/Theme';
import LottieView from 'lottie-react-native';
import React, { memo } from 'react';

const SuccessScreen = () => {
  return (
    <Container style={Layout.alignItemsCenter}>
      <Padding vertical={50} />
      <AppText fontSize={FontSizes.h3} fontWeight={700}>Registration complete!</AppText>
      <LottieView source={require("../../Assets/Animations/success.json")} autoPlay loop style={styles.lottieView} />
    </Container>
  );
};

const styles = ResponsiveStyleSheet.create({
  lottieView: {
    width: 300,
    height: 300,
  }
})

export default memo(SuccessScreen);
