import { CommonColors, FontSizes, Layout, ResponsiveStyleSheet, Spacing } from '@/Theme';
import React, { forwardRef, useImperativeHandle, memo } from 'react';
import { Modal, Pressable, TouchableWithoutFeedback, Text } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { DatePicker } from 'react-native-wheel-pick';
import Box from './Box';
import Row from './Row';
import AppButton from './AppButton';
import Padding from './Padding';

export interface IDatePickerProps {
  onChooseDate: (date: Date) => void;
  
}

export interface IDatePickerRef {
  open: () => void;
  close: () => void;
}

const DatePickerComponent = memo(
  forwardRef<IDatePickerRef, IDatePickerProps>((props, ref) => {
    const [isShow, setIsShow] = React.useState(false);
    const dateValue = React.useRef(new Date());
    const [date, setDate] = React.useState(new Date());

    const closeModal = () => {
      setIsShow(false);
    };

    const onChoose = () => {
      if(props.onChooseDate) props.onChooseDate(dateValue.current);
      setDate(dateValue.current);
      setIsShow(false);
    }

    useImperativeHandle(
      ref,
      () => ({
        open: () => {
          setIsShow(true);
        },
        close: () => {
          setIsShow(false);
        },
      }),
      [],
    );

    return (
      <Modal visible={isShow} transparent animationType="none">
        <TouchableWithoutFeedback onPress={closeModal}>
          <Box flex={1} justify="flex-end" align="flex-end" backgroundColor={'rgba(0,0,0,0.4)'}>
            <Pressable style={styles.bgWhite}>
              <Animated.View entering={FadeInDown.duration(500)} style={Layout.fullWidth}>
                <React.Fragment>
                  <Padding horizontal={Spacing.s}>
                    <Row justify="space-between">
                      <AppButton
                        text="Cancel"
                        backgroundColor="white"
                        textSize={FontSizes.normal}
                        textColor={CommonColors.mainDark}
                        onPress={closeModal}
                      />
                      <AppButton
                        text="Choose"
                        backgroundColor="white"
                        textSize={FontSizes.normal}
                        textColor={CommonColors.mainDark}
                        onPress={onChoose}
                      />
                    </Row>
                  </Padding>
                  <DatePicker
                    order="D-M-Y"
                    style={styles.datePicker}
                    date={date} // Optional prop - default is Today
                    onDateChange={(date: Date) => {
                      console.log(date);
                      dateValue.current = date;
                    }}
                    minimumDate={new Date('1923-01-01')}
                    accentColor="black"
                    textColor={CommonColors.mainDark}
                    textSize={FontSizes.normal}
                    androidVariant="iosClone"
                  />
                </React.Fragment>
              </Animated.View>
            </Pressable>
          </Box>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }),
);

const styles = ResponsiveStyleSheet.create({
  datePicker: {
    height: 215,
    ...Layout.fullWidth,
    backgroundColor: 'white',
  },
  textAction: {
    fontSize: FontSizes.small,
    color: CommonColors.mainDark,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
});
export default DatePickerComponent;
