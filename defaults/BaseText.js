import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CustomTheme from './CustomTheme'
import { AppLoading } from 'expo'

import {
  useFonts,
  RedHatDisplay_400Regular,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_700Bold,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_900Black,
  RedHatDisplay_900Black_Italic,
} from '@expo-google-fonts/red-hat-display';

function BaseText(props) {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium
  })

  return (
    <Text
      style={
        [styles.baseText, props.style, { fontFamily: props.fontFamily || "RedHatDisplay_400Regular" }]}
    >

      {props.children}
    </ Text>
  )
}
// }

const styles = StyleSheet.create({
  baseText: {
    color: CustomTheme.colors.text,
    fontSize: 16,
    fontFamily: "RedHatDisplay_400Regular"
  }
})
export default BaseText
