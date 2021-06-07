import React, { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import CustomTheme from '../defaults/CustomTheme';

import BaseText from '../defaults/BaseText'
import DayButton from './DayButton'

function Alarm(props) {
  const { title, hr, min, meridiem, isOn } = props.alarmData
  const [isEnabled, setIsEnabled] = useState(isOn);
  const days = ["Sunday", "M", "T", "W", "T", "F", "S"]

  function handleSwitch() {
    setIsEnabled(prev => !prev)
  }

  return (
    <View style={styles.alarm}>
      <View style={styles.alarmTop}>
        <View>
          <BaseText>{title}</BaseText>
          <BaseText>{`${hr}:${min} ${meridiem}`}</BaseText>
        </View>

        <Switch
          style={styles.switch}
          value={isEnabled}
          onValueChange={handleSwitch}
          color={CustomTheme.colors.primary}
          trackColor={{ false: "grey", true: CustomTheme.colors.primary }}
          thumbColor="white"
        />

      </View >

      <View style={styles.dayButtonsWrapper}>
        {days.map((day, index) => (
          <DayButton
            key={index}
            day={day}
            isOn={false}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  alarm: {
    marginTop: 60,
    marginRight: 24,
    marginLeft: 24,
  },

  alarmTop: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  switch: {
    // width: "10%"
    borderWidth: 1,
    borderColor: "white"
  },

  dayButtonsWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
})

export default Alarm
