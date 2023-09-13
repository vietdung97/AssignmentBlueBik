import AppInput from '@/Components/AppInput';
import AppText from '@/Components/AppText';
import Box from '@/Components/Box';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import Padding from '@/Components/Padding';
import { AUTH_NAVIGATION } from '@/Constants';
import { CommonColors, FontSizes, ResponsiveStyleSheet, Spacing } from '@/Theme';
import React, { memo, useCallback } from 'react';
import { Pressable } from 'react-native';
import { CheckedSvg, UncheckedSvg } from '@/Assets/Svgs';

const PURPOSES = [
  {
    id: 1,
    name: 'Money transfer',
  },
  {
    id: 2,
    name: 'Payment',
  },
  {
    id: 3,
    name: 'Bill payment',
  },
  {
    id: 4,
    name: 'Loan',
  },
  {
    id: 5,
    name: 'Investment',
  },
  {
    id: 6,
    name: 'Saving',
  },
];

interface IPurposeScreenProps {
  navigation: any;
}

interface ICheckboxProps {
  id: number;
  isChecked: boolean;
  onChange: (id: number) => void;
}

const PurposeScreen = ({ navigation }: IPurposeScreenProps) => {
  const [purposeSelected, setPurposeSelected] = React.useState(new Set<number>([])); // [1, 2, 3
  const nextScreen = () => {
    navigation.push(AUTH_NAVIGATION.SUCCESS);
  };

  const Checkbox = useCallback(({ id, isChecked, onChange }: ICheckboxProps) => {
    const onPress = () => {
      if (onChange) onChange(id);
    };
    return <Pressable onPress={onPress}>{isChecked ? <CheckedSvg /> : <UncheckedSvg />}</Pressable>;
  }, []);

  const onChangeChecked = useCallback((id: number) => {
    if (purposeSelected.has(id)) {
      purposeSelected.delete(id);
    } else {
      purposeSelected.add(id);
    }
    setPurposeSelected(new Set(purposeSelected));
  }, []);
  console.log('📢[index.tsx:71]: purposeSelected.size: ', purposeSelected.size);
  return (
    <Container>
      <Header
        canGoBack
        rightButton={
          <Pressable onPress={nextScreen} disabled={!purposeSelected.size}>
            <AppText
              fontSize={FontSizes.regular}
              fontWeight={700}
              color={!purposeSelected.size ? CommonColors.border : CommonColors.mainDark}>
              Complete
            </AppText>
          </Pressable>
        }
      />
      <Box fill>
        <Padding top={Spacing.xl} />
        <AppText fontSize={FontSizes.h3} fontWeight={600} align="center">
          Purpose
        </AppText>
        <AppText fontSize={FontSizes.normal} fontWeight={400} align="center" color={CommonColors.gray1}>
          Chose one or multiple options
        </AppText>
        <Padding top={Spacing.m} />

        {PURPOSES.map(item => (
          <Box key={item.name} row align="center" justify="space-between" marginBottom={Spacing.m}>
            <AppText fontSize={FontSizes.normal} fontWeight={400} color={CommonColors.mainDark}>
              {item.name}
            </AppText>
            <Checkbox isChecked={purposeSelected.has(item.id)} onChange={onChangeChecked} id={item.id} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

const styles = ResponsiveStyleSheet.create({
  input: {
    backgroundColor: CommonColors.gray4,
    margin: 0,
    padding: 0,
    paddingVertical: 10,
    paddingHorizontal: Spacing.xs,
  },
});

export default memo(PurposeScreen);
