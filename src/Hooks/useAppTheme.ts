import { getAppTheme } from '@/Theme';
import { ImageSourcePropType, useColorScheme } from 'react-native';

export default function () {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return mergeAppTheme(isDark, getAppTheme());
}

const mergeAppTheme = (isDark: boolean, theme: ReturnType<typeof getAppTheme>) => {
  type ImageKey = keyof typeof theme.default.Images | keyof typeof theme.dark.Images;
  type ColorKey = keyof typeof theme.default.Colors | keyof typeof theme.dark.Colors;

  const selectedTheme = isDark ? theme.dark : theme.default;
  const mergedColors: { [key in ColorKey]: string } = {
    ...selectedTheme.Colors,
  } as any;
  const mergedImages: { [key in ImageKey]: ImageSourcePropType } = {
    ...selectedTheme.Images,
  } as any;
  return {
    ...selectedTheme,
    Colors: mergedColors,
    Images: mergedImages,
    isDark,
  };
};
