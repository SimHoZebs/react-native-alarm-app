import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CustomTheme from './CustomTheme'

function BaseText(props) {

  return <Text
    style={[
      styles.baseText,
      props.style,
      { fontFamily: props.fontFamily || "fontRegular" }
    ]}
  >
    {props.children}
  </ Text>
}

const styles = StyleSheet.create({
  baseText: {
    color: CustomTheme.colors.text,
    fontSize: 16,
    fontFamily: "fontRegular"
  }
})

export default BaseText