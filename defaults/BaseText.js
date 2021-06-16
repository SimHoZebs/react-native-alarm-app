import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CustomTheme from './CustomTheme'

import {
  useFonts,
  RedHatDisplay_400Regular as fontRegular,
  RedHatDisplay_500Medium as fontMedium,
  RedHatDisplay_700Bold as fontBold,
  RedHatDisplay_900Black as fontBlack,
} from '@expo-google-fonts/red-hat-display';

function BaseText(props) {
  let [fontsLoaded] = useFonts({
    fontRegular,
    fontMedium
  })

  return (!fontsLoaded ? null :
    <Text
      style={[
        styles.baseText,
        props.style,
        { fontFamily: props.fontFamily || "fontRegular" }
      ]}
    >
      {props.children}
    </ Text>
  )
}

const styles = StyleSheet.create({
  baseText: {
    color: CustomTheme.colors.text,
    fontSize: 16,
    fontFamily: "fontRegular"
  }
})

export default BaseText