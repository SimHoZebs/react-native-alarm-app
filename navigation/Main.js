import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native';

//expo APIs
import * as Calendar from 'expo-calendar'
import * as Notifications from 'expo-notifications'

//defaults
import BaseView from '../defaults/BaseView'

//components
import HeaderText from '../components/HeaderText'
import Alarm from '../components/Alarm';

//data
import alarmData from '../app-data'

function Main(props) {
	const [data, setData] = useState(alarmData)

	useEffect(() => {
		setData(alarmData)
		async () => {
			const { status } = await Calendar.requestCalendarPermissionsAsync();
			if (status === 'granted') {
				const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
				console.log('Here are all your calendars:');
				console.log({ calendars });
			}
		};
	}, [])

	useEffect(() => {
	}, []);

	return (
		<BaseView>
			<View style={styles.header}>
				<HeaderText>Next Alarm In</HeaderText>
				<HeaderText style={styles.headerRemainingTime}>24 hours 59 minutes</HeaderText>
			</View>

			<View style={styles.main}>
				{data.map((alarmData, index) => (
					< Alarm
						key={index}
						index={index}
						alarmData={alarmData}
						setData={setData}
						navigation={props.navigation}
					/>
				))}
			</View>
			<Button title="Cancel all notification" onPress={async () => await cancelAlarm()} />
			<Button title="Create a test alarm" onPress={async () => await createAlarm()} />
		</BaseView>
	)
}

const styles = StyleSheet.create({
	header: {
		marginTop: 80,
	},

	headerRemainingTime: {
		paddingTop: 5,
		fontSize: 34
	}
});

async function getDefaultCalendarSource() {
	const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
	const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
	return defaultCalendars[0].source;
}

async function createAlarm() {
	const createdAlarm = await Notifications.scheduleNotificationAsync({
		content: {
			title: "test alarm notification",
			sound: "testAlarmSound.wav",
			body: 'Here is the notification body',
			data: {
				data: 'goes here'
			},
			categoryIdentifier: "alarm"
		},
		trigger: {
			seconds: 1,
		},
	});
}

async function cancelAlarm() {
	await Notifications.cancelAllScheduledNotificationsAsync()
}

export default Main