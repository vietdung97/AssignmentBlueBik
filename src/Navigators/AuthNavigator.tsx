import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AUTH_NAVIGATION } from '@/Constants/RouteNames';
import { AdditionalInformationScreen, BasicInformationScreen, PurposeScreen, SuccessScreen } from '@/Screens';
import { screenOptions } from './NavigationUtils';

export type AuthStackParam = {
  [AUTH_NAVIGATION.BASIC_INFORMATION]: undefined;
  [AUTH_NAVIGATION.ADDITIONAL_INFORMATION]: undefined;
  [AUTH_NAVIGATION.PURPOSE]: undefined;
  [AUTH_NAVIGATION.SUCCESS]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParam>();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={AUTH_NAVIGATION.BASIC_INFORMATION} screenOptions={screenOptions}>
      <Stack.Screen component={BasicInformationScreen} name={AUTH_NAVIGATION.BASIC_INFORMATION}  />
      <Stack.Screen component={AdditionalInformationScreen} name={AUTH_NAVIGATION.ADDITIONAL_INFORMATION}  />
      <Stack.Screen component={PurposeScreen} name={AUTH_NAVIGATION.PURPOSE}  />
      <Stack.Screen component={SuccessScreen} name={AUTH_NAVIGATION.SUCCESS}  />
    </Stack.Navigator>
  );
}
