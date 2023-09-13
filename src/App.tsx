import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from '@/Navigators';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
};
