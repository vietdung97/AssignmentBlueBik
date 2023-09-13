import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { screenOptions } from './NavigationUtils';
import HomeNavigator from './HomeNavigator';
import { APP_NAVIGATION } from '@/Constants';
import { Layout } from '@/Theme';
import BottomTabBar from '@/Components/BottomTabBar';

export type TabBottomStackParam = {
  [APP_NAVIGATION.HOME]: undefined;
  [APP_NAVIGATION.SEARCH]: undefined;
  [APP_NAVIGATION.NOTIFICATION]: undefined;
  [APP_NAVIGATION.PROFILE]: undefined;
  [APP_NAVIGATION.MEDIA]: { uri: string; mimeType: 'video' | 'audio' | 'image' };
};
// tabBarVisible: false no longer exists on v6 but you can use tabBarStyle: { display: 'none' } instead. I found out here

// https://reactnavigation.org/docs/upgrading-from-5.x/#the-tabbarvisible-option-is-no-longer-present

const Tab = createBottomTabNavigator<TabBottomStackParam>();
const AppBottomTab = () => {
  return (
    <View style={[Layout.fill]}>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={screenOptions}>
        <Tab.Screen name={APP_NAVIGATION.HOME} component={HomeNavigator} />
      </Tab.Navigator>
    </View>
  );
};

export default AppBottomTab;
