import React, { useState, useEffect } from 'react'
import { StyleSheet, Pressable } from 'react-native'

import BaseText from '../defaults/BaseText'
import CustomTheme from '../defaults/CustomTheme'

function DayButton(props) {
  const [textColor, setTextColor] = useState("black")
  const [bgColor, setBgColor] = useState(CustomTheme.colors.primary)
  const [isActiveDay, setIsActiveDay] = useState(props.isAcitveDay)

  useEffect(() => {
    setTextColor(isActiveDay ? "black" : "white")
    setBgColor(isActiveDay ? CustomTheme.colors.primary : "black")

    if (props.day === "Sunday") {
      setTextColor("red")
    }
  }, [isActiveDay])

  return (
    <Pressable
      style={[
        styles.dayButtonWrapper, { backgroundColor: bgColor, }
      ]}
      onPress={() => setIsActiveDay(prev => !prev)}
    >
      <BaseText
        style={[
          styles.dayButtonText, { color: textColor }
        ]}
      >
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
