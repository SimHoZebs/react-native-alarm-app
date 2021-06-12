import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//defaults
import CustomTheme from './defaults/CustomTheme'

//navigation
import Main from './navigation/Main'
import AlarmScreen from './navigation/AlarmScreen'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <PaperProvider theme={CustomTheme}>
        <ExpoStatusBar style="auto" />
        <Stack.Navigator initialRouteName="Main" >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}