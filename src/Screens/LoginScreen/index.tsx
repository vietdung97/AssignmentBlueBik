import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { ILoginProps } from './prop';

const LoginScreen = (props: ILoginProps) => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Text></Text>
      <Text>Login </Text>
    </View>
  );
};

export default React.memo(LoginScreen);

