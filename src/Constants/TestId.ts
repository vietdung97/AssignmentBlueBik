import { Platform } from 'react-native';

export const generateTestId = (prefix: string, id: string) => `${prefix}-${id}`;

export const generateTestIdProps = (prefix: string, id: string) => {
  const testID = generateTestId(prefix, id);
  if (Platform.OS === 'ios') {
    return {
      testID,
      accessible: false,
    };
  }

  return {
    testID,
    accessible: true,
    accessibilityLabel: testID,
  };
};
