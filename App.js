import React, { useState, useEffect, useRef } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

//expo API
import Constants from 'expo-constants'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import * as Notifications from 'expo-notifications'
import {
  useFonts,
  RedHatDisplay_400Regular as fontRegular,
  RedHatDisplay_500Medium as fontMedium,
  RedHatDisplay_700Bold as fontBold,
  RedHatDisplay_900Black as fontBlack,
} from '@expo-google-fonts/red-hat-display';

//defaults
import CustomTheme from './defaults/CustomTheme'

//navigation
import Main from './navigation/Main'
import AlarmScreen from './navigation/AlarmScreen'

//functions
import { handleNotificationResponse } from './functions/handleNotification'

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
      console.log(notification.request.identifier)
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      handleNotificationResponse(response)
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
          screenOptions={{
            stackAnimation: "none",
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  )
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: "testAlarmSound.wav"
    });
  }

  const anotherTest = await Notifications.setNotificationCategoryAsync("alarm", [
    {
      identifier: "snooze",
      buttonTitle: "Snooze"
    },
    {
      identifier: "dismiss",
      buttonTitle: "Dismiss"
    }
  ])

  return token;
}