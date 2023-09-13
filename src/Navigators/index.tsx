import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { AppNavigator } from '@/Navigators/AppNavigator';
import { AuthNavigator } from '@/Navigators/AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_ROUTES } from '@/Constants';
import '@/Services/NetworkService';
import { navigationRef, screenOptions } from './NavigationUtils';
export type RootStackParam = {
  [ROOT_ROUTES.APP_NAVIGATION]: undefined;
  [ROOT_ROUTES.AUTH_NAVIGATION]: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParam>();

export function RootNavigator() {
  const user = false;
  const chooseScreen = useMemo(() => {
    return user ? (
      <RootStack.Screen name={ROOT_ROUTES.APP_NAVIGATION} component={AppNavigator} />
    ) : (
      <RootStack.Screen name={ROOT_ROUTES.AUTH_NAVIGATION} component={AuthNavigator} />
    );
  }, [user]);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={screenOptions as any}>{chooseScreen}</RootStack.Navigator>
    </NavigationContainer>
  );
}
