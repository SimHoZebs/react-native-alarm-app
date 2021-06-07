import React, { useState, useEffect } from 'react'

import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'

import CustomTheme from './defaults/CustomTheme'

import HeaderText from './components/HeaderText'
import Alarm from './components/Alarm';

import alarmData from './app-data'

export default function App() {
  const [data, setData] = useState(alarmData)

  useEffect(() => {
    setData(alarmData)
  }, [])

  const test = 5;
  console.log(test.toString.length);

  return (
    <PaperProvider theme={CustomTheme}>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderText style={styles.headerTopText}>Next Alarm In</HeaderText>
          <HeaderText style={styles.headerRemainingTime}>24 hours 59 minutes</HeaderText>
        </View>

        <View style={styles.main}>
          {data.map((alarmData, index) => (
            < Alarm
              key={index}
              index={index}
              alarmData={alarmData}
              setData={setData}
            />
          ))}
        </View>

        <ExpoStatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "purple",
    backgroundColor: CustomTheme.colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  header: {
    marginTop: 100,
  },

  headerTopText: {
    fontSize: 24
  },

  headerRemainingTime: {
    paddingTop: 5,
    fontSize: 34
  }
});
