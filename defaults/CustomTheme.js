import { configureFonts, DefaultTheme } from 'react-native-paper'

const fontConfig = {
  android: {
    regular: {
      fontFamily: 'fontRegular'
    }
  }
}

const CustomTheme = {
  ...DefaultTheme,
  dark: true,

  colors: {
    ...DefaultTheme.colors,
    primary: '#FFE66D',
    background: 'black',
    text: 'white',
    placeholder: "hsl(0,0%,70%)"
  },

  fonts: configureFonts(fontConfig)
}

export default CustomTheme
