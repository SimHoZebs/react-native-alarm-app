import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Button, Pressable } from 'react-native'

import BaseText from '../defaults/BaseText'
import CustomTheme from '../defaults/CustomTheme'

function DayButton(props) {
  const [textColor, setTextColor] = useState("black")
  const [bgColor, setBgColor] = useState(CustomTheme.colors.primary)
  const [isOn, setIsOn] = useState(props.isOn)

  useEffect(() => {
    setTextColor(isOn ? "black" : "white")
    setBgColor(isOn ? CustomTheme.colors.primary : "black")

    if (props.day === "Sunday") {
      setTextColor("red")
    }
  }, [isOn])

  return (
    <Pressable
      style={[styles.dayButtonWrapper, { backgroundColor: bgColor, }]}
      onPress={() => setIsOn(prev => !prev)}
    >
      <BaseText style={[styles.dayButtonText, { color: textColor }]} >
        {props.day[0]}
      </BaseText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  dayButtonWrapper: {
    alignSelf: "center",
    backgroundColor: CustomTheme.colors.primary,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    width: 40,
    height: 40,
    justifyContent: "center",
  },

  dayButtonText: {
    color: "white",
    alignSelf: "center",
  }
})

export default DayButton
