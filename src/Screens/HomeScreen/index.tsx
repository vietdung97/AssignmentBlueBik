import { View } from 'react-native';
import { styles } from './style';
import { IHomeProps } from './prop';
import React from 'react';

import AppText from '@/Components/AppText';
import AppButton from '@/Components/AppButton';
import ErrorLabel from '@/Components/ErrorLabel';
import Container from '@/Components/Container';
import { useCountStore } from '@/Stores/useCountStore';
import Timestamp from './Timestamp';
import { useTimestampStore } from '@/Stores/useTimestampStore';
import { storage } from '@/Storage';

const HomeScreen = (props: IHomeProps) => {
  const count = useCountStore(s => s.count);
  const decrement = useCountStore(s => s.decrement);
  const increment = useCountStore(s => s.increment);
  const reload = useTimestampStore(s => s.reload);

  console.log('render Home');

  return (
    <Container>
      <View style={styles.container}>
        <AppText fontSize={15} fontWeight={500}>
          Count: {count}
        </AppText>
        <AppButton text={'increment'} onPress={() => increment()} />
        <AppButton text={'decrement'} onPress={() => decrement()} />
        <AppButton text={'Reload ts'} onPress={() => reload()} />
        <Timestamp />
        <AppButton
          text={'Storage TS'}
          onPress={() => {
            storage.set('ts', Date.now());
          }}
        />
        <AppButton
          text={'Remove Storage TS'}
          onPress={() => {
            storage.delete('ts');
          }}
        />
        <ErrorLabel text={'ErrorLabel'} />
      </View>
    </Container>
  );
};

export default React.memo(HomeScreen);
