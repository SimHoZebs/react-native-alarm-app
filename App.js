import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

//defaults
import CustomTheme from './defaults/CustomTheme'

//navigation
import Main from './navigation/Main'
import AlarmScreen from './navigation/AlarmScreen'

import {
  useFonts,
  RedHatDisplay_400Regular as fontRegular,
  RedHatDisplay_500Medium as fontMedium,
  RedHatDisplay_700Bold as fontBold,
  RedHatDisplay_900Black as fontBlack,
} from '@expo-google-fonts/red-hat-display';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    fontRegular,
    fontMedium
  })

  return (!fontsLoaded ? null :
    <NavigationContainer>
      <PaperProvider theme={CustomTheme}>
        <ExpoStatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ stackAnimation: "none" }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}