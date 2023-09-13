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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegexValidPhoneNumber } from '@/Utils/regexs';
import ErrorLabel from '@/Components/ErrorLabel';
import DatePickerComponent, { IDatePickerRef } from '@/Components/DatePicker';
import dayjs from 'dayjs';

interface IAdditionalInformationScreenProps {
  navigation: any;
}

type FormData = {
  email: string;
  phoneNumber: string;
  dob: Date;
};

const schema = yup.object().shape({
  email: yup.string().required('Full name is required').email('Please enter a valid email address'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(RegexValidPhoneNumber, 'Please enter a valid phone number'),
  dob: yup
    .date()
    .required('Date of birth is required')
    .test({
      name: 'dob',
      message: 'You must be 15 years old to create an account and use the e-wallet service.',
      test: value => {
        const currentDateTS = Date.now();
        const selectedDateTS = value.getTime();
        const age = dayjs(currentDateTS).diff(selectedDateTS, 'year', false);
        return age >= 15;
      },
    }),
});

const AdditionalInformationScreen = ({ navigation }: IAdditionalInformationScreenProps) => {
  const datePickerRef = React.useRef<IDatePickerRef>(null);
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      phoneNumber: '',
    },
  });

  const openDatePicker = () => {
    datePickerRef?.current?.open();
  };

  const onChooseDate = useCallback((date: Date) => {
    const currentDateTS = Date.now();
    const selectedDateTS = date.getTime();
    const age = dayjs(currentDateTS).diff(selectedDateTS, 'year', false);
    setValue('dob', date);
    if (age < 15) {
      setError('dob', { message: 'You must be 15 years old to create an account and use the e-wallet service.' });
      return;
    }

    setError('dob', {});
    trigger('dob');
  }, []);

  const nextScreen = (data: FormData) => {
    navigation.push(AUTH_NAVIGATION.PURPOSE);
  };

  return (
    <Container>
      <Header
        canGoBack
        rightButton={
          <Pressable onPress={handleSubmit(nextScreen)}>
            <AppText
              fontSize={FontSizes.regular}
              fontWeight={700}
              color={!isValid ? CommonColors.border : CommonColors.mainDark}>
              Next
            </AppText>
          </Pressable>
        }
      />
      <Box fill>
        <Padding top={Spacing.xl} />
        <AppText fontSize={FontSizes.h3} fontWeight={600} align="center">
          Additional Information
        </AppText>
        <Padding top={Spacing.m} />

        <AppText fontSize={FontSizes.small} fontWeight={400} color={CommonColors.mainDark}>
          Email address
        </AppText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              placeholder="Enter your email address"
              fontSize={FontSizes.normal}
              color={CommonColors.mainDark}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="email"
        />

        {errors?.email?.message && <ErrorLabel text={errors?.email?.message} textStyle={styles.errorMsg} />}

        <Padding top={Spacing.s} />

        <AppText fontSize={FontSizes.small} fontWeight={400} color={CommonColors.mainDark}>
          Phone number
        </AppText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              placeholder="Enter your phone number"
              fontSize={FontSizes.normal}
              color={CommonColors.mainDark}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="phoneNumber"
        />
        {errors?.phoneNumber?.message && <ErrorLabel text={errors?.phoneNumber?.message} textStyle={styles.errorMsg} />}

        <Padding top={Spacing.s} />

        <AppText fontSize={FontSizes.small} fontWeight={400} color={CommonColors.mainDark}>
          Date of birth
        </AppText>
        <Pressable onPress={openDatePicker}>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <AppInput
                placeholder="Enter your date of birth"
                fontSize={FontSizes.normal}
                color={CommonColors.mainDark}
                style={styles.input}
                pointerEvents="none"
                editable={false}
                value={value ? dayjs(value).format('DD/MM/YYYY') : ''}
              />
            )}
            name="dob"
          />
          {errors?.dob?.message && <ErrorLabel text={errors?.dob?.message} textStyle={styles.errorMsg} />}
        </Pressable>
      </Box>
      <DatePickerComponent ref={datePickerRef} onChooseDate={onChooseDate} />
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

export default memo(AdditionalInformationScreen);
