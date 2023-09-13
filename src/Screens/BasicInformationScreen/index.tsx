import AppInput from '@/Components/AppInput';
import AppText from '@/Components/AppText';
import Box from '@/Components/Box';
import Container from '@/Components/Container';
import ErrorLabel from '@/Components/ErrorLabel';
import Header from '@/Components/Header';
import Padding from '@/Components/Padding';
import { AUTH_NAVIGATION, generateTestIdProps } from '@/Constants';
import { CommonColors, FontSizes, ResponsiveStyleSheet, Spacing } from '@/Theme';
import { RegexValidIdNumber, RegexValidName } from '@/Utils/regexs';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IBasicInformationScreenProps {
  navigation: any;
}

type FormData = {
  fullName: string;
  idNumber: string;
};

const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required').matches(RegexValidName, 'Please enter a valid name'),
  idNumber: yup
    .string()
    .required('ID number is required')
    .matches(RegexValidIdNumber, 'Please enter a valid ID number'),
});

const BasicInformationScreen = ({ navigation }: IBasicInformationScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      idNumber: '',
    },
  });

  const nextScreen = (data: FormData) => {
    navigation.push(AUTH_NAVIGATION.ADDITIONAL_INFORMATION);
  };

  return (
    <Container>
      <Header
        rightButton={
          <Pressable onPress={handleSubmit(nextScreen)}>
            <AppText
              fontSize={FontSizes.regular}
              fontWeight={700}
              {...generateTestIdProps(AUTH_NAVIGATION.BASIC_INFORMATION, 'btn-next')}
              color={!isValid ? CommonColors.border : CommonColors.mainDark}>
              Next
            </AppText>
          </Pressable>
        }
      />
      <Box fill>
        <Padding top={Spacing.xl} />
        <AppText fontSize={FontSizes.h3} fontWeight={600} align="center">
          Basic Information
        </AppText>
        <Padding top={Spacing.m} />

        <AppText fontSize={FontSizes.small} fontWeight={400} color={CommonColors.mainDark}>
          Full-name
        </AppText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              placeholder="Enter your full name"
              fontSize={FontSizes.normal}
              color={CommonColors.mainDark}
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              {...generateTestIdProps(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-full-name')}
            />
          )}
          name="fullName"
        />

        {errors?.fullName?.message && <ErrorLabel text={errors?.fullName?.message} textStyle={styles.errorMsg} />}

        <Padding top={Spacing.s} />

        <AppText fontSize={FontSizes.small} fontWeight={400} color={CommonColors.mainDark}>
          ID number
        </AppText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              placeholder="Enter your ID number"
              fontSize={FontSizes.normal}
              color={CommonColors.mainDark}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              {...generateTestIdProps(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-id-number')}
            />
          )}
          name="idNumber"
        />
        {errors?.idNumber?.message && <ErrorLabel text={errors?.idNumber?.message} textStyle={styles.errorMsg} />}
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
  errorMsg: {
    fontSize: FontSizes.tiny,
    fontStyle: 'italic',
  },
});

export default memo(BasicInformationScreen);
