import { DarkColors, LightColors } from './Colors';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { getDarkImages, getImages } from '@/Assets/Images';
export const getAppTheme = () => ({
  default: {
    Colors: LightColors,
    Images: getImages(),
    NavigationTheme: DefaultTheme,
  },
  dark: {
    Colors: DarkColors,
    Images: getDarkImages(),
    NavigationTheme: DarkTheme,
  },
});
