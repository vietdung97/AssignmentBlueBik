import React from 'react';
import Box from './Box';
import { Layout } from '@/Theme';
import AppText from './AppText';
import { Pressable } from 'react-native';
import { goBack } from '@/Navigators/NavigationUtils';
import { ChevLeftSvg } from '@/Assets/Svgs';

interface IHeaderProps {
  title?: string;
  canGoBack?: boolean;
  rightButton?: React.ReactNode;
}
const HEADER_HEIGHT = 50;
const Header = (props: IHeaderProps) => {
  return (
    <Box row justify="center" align="center" style={[Layout.fullWidth, { height: HEADER_HEIGHT }]}>
      <Box flex={1}>
        {props.canGoBack && (
          <Pressable onPress={goBack}>
            <Box>
              <ChevLeftSvg />
            </Box>
          </Pressable>
        )}
      </Box>
      <Box flex={1} align="center">
        {props.title && (
          <Box>
            <AppText>{props.title}</AppText>
          </Box>
        )}
      </Box>
      <Box flex={1} align="flex-end">
        {props.rightButton}
      </Box>
    </Box>
  );
};

export default Header;
