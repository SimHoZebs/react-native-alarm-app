import { DefaultTheme } from 'react-native-paper'

const CustomTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#FFE66D',
    background: 'black',
    text: 'white'
  },
}

export default CustomTheme
