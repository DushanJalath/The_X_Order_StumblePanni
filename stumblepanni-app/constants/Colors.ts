/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    // defaults
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  
  },
  pallete: {
    // custom
    accent: '#008080',
    yellow: '#F4B81C',
    red: '#A82A2A',
    orange: '#BC5D00',
    bluegrey: '#B8CBD9',
    lightgrey: '#D9D9D9',
    mediumgrey: '#A6A6A6',
    darkgrey: '#171717',
    white: '#FFFFFF',
    black: '#000000',
  },
  
};
