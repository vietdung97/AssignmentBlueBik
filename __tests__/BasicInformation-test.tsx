import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { BasicInformationScreen } from '@/Screens';
import { CommonColors } from '@/Theme';
import { AUTH_NAVIGATION, generateTestId } from '@/Constants';

describe('BasicInformationScreen', () => {
  it('Check visibe input: 2 input', async () => {
    const push = jest.fn();
    render(<BasicInformationScreen navigation={{ push }} />);
    const inputFullName = await screen.findByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-full-name'));
    const inputIdNumber = await screen.findByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-id-number'));
    expect(inputFullName).toBeTruthy();
    expect(inputIdNumber).toBeTruthy();
  });

  it('Check error validation: Full-name is required', async () => {
    const push = jest.fn();
    const { getByTestId } = render(<BasicInformationScreen navigation={{ push }} />);
    const inputFullName = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-full-name'));
    fireEvent.changeText(inputFullName, '');
    const errorInputFullName = await screen.findAllByText('Full name is required');
    expect(errorInputFullName).toBeTruthy();
  });

  it('Check error validation: Please enter a valid name', async () => {
    const push = jest.fn();
    const { getByTestId } = render(<BasicInformationScreen navigation={{ push }} />);
    const inputFullName = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-full-name'));
    fireEvent.changeText(inputFullName, '@123@');
    const errorInputFullName = await screen.findAllByText('Please enter a valid name');
    expect(errorInputFullName).toBeTruthy();
  });

  it('Check error validation: Id Number is required', async () => {
    const push = jest.fn();
    const { getByTestId } = render(<BasicInformationScreen navigation={{ push }} />);
    const input = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-id-number'));
    fireEvent.changeText(input, '');
    const err = await screen.findAllByText('ID number is required');
    expect(err).toBeTruthy();
  });

  it('Check error validation: Please enter a valid ID number', async () => {
    const push = jest.fn();
    const { getByTestId } = render(<BasicInformationScreen navigation={{ push }} />);
    const input = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-id-number'));
    fireEvent.changeText(input, '123123');
    const err = await screen.findAllByText('Please enter a valid ID number');
    expect(err).toBeTruthy();
  });

  it('Check enable Next button and Navigate correct screen', async () => {
    const push = jest.fn();
    const { getByTestId } = render(<BasicInformationScreen navigation={{ push }} />);
    const input1 = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-full-name'));
    const input2 = getByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'input-id-number'));
    fireEvent.changeText(input1, 'Dung Ngo Viet');
    fireEvent.changeText(input2, '123123123123');
    const btnNext = await screen.findByTestId(generateTestId(AUTH_NAVIGATION.BASIC_INFORMATION, 'btn-next'));
    let spreadStyle = {};
    if (Array.isArray(btnNext.props.style)) {
      btnNext.props.style.forEach(item => {
        if (item) {
          spreadStyle = { ...spreadStyle, ...item };
        }
      });
    }
    expect(spreadStyle).toHaveProperty('color', CommonColors.mainDark);
    await waitFor(() => {
      fireEvent.press(btnNext.parent!);
    });
    expect(push).toBeCalledWith(AUTH_NAVIGATION.ADDITIONAL_INFORMATION);
  });
});
