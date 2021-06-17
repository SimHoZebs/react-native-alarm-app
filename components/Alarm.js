import React, { useState } from 'react'
import { Pressable, StyleSheet, Switch, TouchableOpacity, View } from 'react-native'
import CustomTheme from '../defaults/CustomTheme';

import BaseText from '../defaults/BaseText'

function Alarm(props) {
  const { title, hr, min, meridiem, isOn, activeDays } = props.alarmData
  const [alarmIsOn, setAlarmIsOn] = useState(isOn);

  function handleOnPress() {
    props.navigation.navigate("AlarmScreen", {
      alarmData: props.alarmData,
      activeDays: activeDays
    })
  }

  return (
    <View style={styles.alarm}
    >
      <Pressable onPress={handleOnPress} >
        <View style={styles.alarmTop}>
          <View>
            <BaseText>{title}</BaseText>
            <BaseText style={styles.time}>{`${hr}:${min} ${meridiem}`}</BaseText>
          </View>

          <Switch
            style={styles.switch}
            value={alarmIsOn}
            onValueChange={() => setAlarmIsOn(prev => !prev)}
            color={CustomTheme.colors.primary}
            trackColor={{
              false: "grey",
              true: CustomTheme.colors.primary
            }}
            thumbColor="white"
          />
        </View >
      </Pressable>
    </View >
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

  time: {
    fontSize: 30
  },

  switch: {
    borderWidth: 1,
    borderColor: "white"
  },

})

export default Alarm
