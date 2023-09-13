import { MESSENGER_BOTTOM_TAB } from '@/Constants';
import { navigate } from '@/Navigators/NavigationUtils';
import { CommonColors, Layout, Responsive, ResponsiveStyleSheet } from '@/Theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatSvg, DiscoverSvg, FriendSvg } from '@/Assets/Svgs';
import { useAppTheme } from '@/Hooks';

const BottomTabBar = ({ state }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const { Colors, Images } = useAppTheme();
  const tabBars = useMemo(
    () => [
      {
        name: 'Chat',
        icon: ChatSvg,
        routeName: MESSENGER_BOTTOM_TAB.CHAT,
        index: 0,
      },
      {
        name: 'Friends',
        icon: FriendSvg,
        routeName: MESSENGER_BOTTOM_TAB.FRIENDS,
        index: 1,
      },
      {
        name: 'Discover',
        icon: DiscoverSvg,
        routeName: MESSENGER_BOTTOM_TAB.DISCOVER,
        index: 2,
      },
    ],
    [],
  );
  const renderTabItem = useCallback(
    (tab: any) => {
      return (
        <React.Fragment key={tab.name}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[Layout.center, styles.tab]}
            onPress={() => navigate(tab.routeName)}>
            {tab.icon && (
              <tab.icon size={24} color={tab.index === state.index ? Colors.whiteAndBlack : Colors.unselectTabIcon} />
            )}
          </TouchableOpacity>
        </React.Fragment>
      );
    },
    [state.index, Colors],
  );

  const styleColorApp = React.useMemo(
    () => ({
      borderColor: {
        borderColor: Colors.borderTopBottomBar,
      },
    }),
    [Colors],
  );

  return (
    <View style={[styles.rootView, styleColorApp.borderColor]}>
      <Image source={Images.MessengerBottomTabBackground} style={[styles.imgBottomTab, styles.sizeBottomTab]} />
      <View style={[styles.tabBarView, styles.sizeBottomTab]}>{tabBars.map(renderTabItem)}</View>
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
    zIndex: 99,
    borderTopWidth: 0.33,
  },
  tabBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  imgBottomTab: {
    position: 'absolute',
    zIndex: 0,
  },
  sizeBottomTab: {
    width: '100%',
    height: Responsive.ifNotchIphone(86, 80),
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
  tab: {
    height: 52,
    width: 80,
  },
});
