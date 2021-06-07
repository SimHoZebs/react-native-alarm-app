import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CustomTheme from './CustomTheme'

import {
  useFonts,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_700Bold,
  RedHatDisplay_900Black,
} from '@expo-google-fonts/red-hat-display';

function BaseText(props) {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium
  })

  return (!fontsLoaded ? null :
    <Text
      style={[
        styles.baseText,
        props.style,
        { fontFamily: props.fontFamily || "RedHatDisplay_400Regular" }
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
    fontFamily: "RedHatDisplay_400Regular"
  }
})
export default BaseText
