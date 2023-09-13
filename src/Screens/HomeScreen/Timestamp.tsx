import { useTimestampStore } from '@/Stores/useTimestampStore';
import React from 'react';
import { Text } from 'react-native';

const Timestamp = () => {
  console.log('render Timestamp');
  const ts = useTimestampStore(s => s.ts);
  return <Text>{ts}</Text>;
};

export default React.memo(Timestamp);
