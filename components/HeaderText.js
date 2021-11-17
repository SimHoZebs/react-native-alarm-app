import React from 'react'
import { StyleSheet } from 'react-native'
import BaseText from '../defaults/BaseText'

function HeaderText(props) {
  return (
    <BaseText
      style={[styles.headerText, props.style,]}
      fontFamily="RedHatDisplay_500Medium"
    >
      {props.children}
    </BaseText>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    alignSelf: "center",
    fontFamily: "RedHatDisplay_500Medium"
  }
})
export default HeaderText
