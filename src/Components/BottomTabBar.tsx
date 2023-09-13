import { APP_NAVIGATION } from '@/Constants';
import { navigate } from '@/Navigators/NavigationUtils';
import { CommonColors, Layout, ResponsiveStyleSheet } from '@/Theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Padding from './Padding';
import { HeartSvg, HomeSvg, SearchSvg } from '@/Assets/Svgs';

const BottomTabBar = ({ state }: BottomTabBarProps) => {
  const tabBars = useMemo(
    () => [
      {
        name: 'Home',
        icon: HomeSvg,
        routeName: APP_NAVIGATION.HOME,
        index: 0,
      },
      {
        name: 'Search',
        icon: SearchSvg,
        routeName: APP_NAVIGATION.SEARCH,
        index: 1,
      },
      {
        name: 'Create',
        // icon: PlusCircleSvg,
      },
      {
        name: 'Notification',
        icon: HeartSvg,
        routeName: APP_NAVIGATION.NOTIFICATION,
        index: 2,
      },
      {
        name: 'Profile',
        icon: HeartSvg,
        // icon: ({ color, ...restProps }) => (
        //   <AppImage
        //     {...restProps}
        //     containerStyle={[styles.avatar, { borderColor: color }]}
        //     source={{
        //       uri: userStore?.userInfo?.avatar_url || 'https://picsum.photos/200/300',
        //     }}
        //   />
        // ),
        routeName: APP_NAVIGATION.NOTIFICATION,
        index: 3,
      },
    ],
    [],
  );
  const renderTabItem = useCallback(
    (tab: any) => {
      return (
        <React.Fragment key={tab.name}>
          {tab.name !== 'Create' ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[Layout.fill, Layout.center]}
              onPress={() => navigate(tab.routeName)}>
              {tab.icon && (
                <tab.icon
                  onPress={() => navigate(tab.routeName)}
                  size={24}
                  color={tab.index === state.index ? CommonColors.primary : CommonColors.white}
                />
              )}
              <Text>{tab.name}</Text>
            </TouchableOpacity>
          ) : (
            <Padding horizontal={16}>{/* <CreateButton /> */}</Padding>
          )}
        </React.Fragment>
      );
    },
    [state.index],
  );
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.rootView}>
      <View
        style={[
          styles.tabBarView,
          {
            // height: 80 + (bottom > 0 ? 10 : 0),
          },
        ]}>
        {tabBars.map(renderTabItem)}
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = ResponsiveStyleSheet.create({
  rootView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: CommonColors.kFF7A51,
    zIndex: 99,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBarView: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  createBtn: {
    marginBottom: 50,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 99,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: CommonColors.white,
  },
});
