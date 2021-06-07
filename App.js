import React, { useState, useEffect } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'

//defaults
import CustomTheme from './defaults/CustomTheme'

//components
import HeaderText from './components/HeaderText'
import Alarm from './components/Alarm';

//data
import alarmData from './app-data'

export default function App() {
  const [data, setData] = useState(alarmData)

  useEffect(() => {
    setData(alarmData)
  }, [])


  return (
    <PaperProvider theme={CustomTheme}>
      <ExpoStatusBar style="auto" />

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
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
