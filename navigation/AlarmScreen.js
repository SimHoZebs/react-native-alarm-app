import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

//defaults
import BaseView from '../defaults/BaseView'
import BaseText from '../defaults/BaseText'

//components
import WeekButtons from '../components/WeekButtons'
import ButtonText from '../components/ButtonText'
import HeaderText from '../components/HeaderText'

function AlarmScreen(props) {
	const { alarmData, activeDays } = props.route.params
	const [date, setDate] = useState(new Date())
	const [showTimePicker, setShowTimePicker] = useState(false)

	useEffect(() => {
		setDate(prev => {
			prev.setHours(alarmData.hr)
			prev.setMinutes(alarmData.min)
			return prev
		})
	}, [])

	function handleDateTimeViewOnChange(event, selectedTime) {
		setShowTimePicker(false)
		if (selectedTime === undefined) { return }
		console.log(selectedTime.toString().split(" ")[4])
		setDate(prev => selectedTime)
	}

	return (
		<BaseView>
			<HeaderText style={{ paddingTop: 100 }}>This alarm rings in</HeaderText>
			<HeaderText>Yes</HeaderText>

			<Pressable
				style={styles.alarmTime}
				onPress={() => setShowTimePicker(true)}>
				<BaseText style={styles.time}>
					{`${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} : ${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`}
				</BaseText>
			</Pressable>

			{showTimePicker &&
				<DateTimePicker
					minimumDate={new Date()}
					value={date}
					mode="time"
					onChange={handleDateTimeViewOnChange}
				/>
			}

			<WeekButtons
				activeDays={activeDays}
			/>

			<Pressable>
				<ButtonText>Set specific dates</ButtonText>
			</Pressable>

			<View style={styles.bottomButtonsWrapper}>
				<Pressable style={styles.bottomButton}>
					<ButtonText>Cancel</ButtonText>
				</Pressable>

				<Pressable style={styles.bottomButton}>
					<ButtonText>Save</ButtonText>
				</Pressable>
			</View>
		</BaseView>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		textAlign: "center",
	},

	alarmTime: {
		marginVertical: 40,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
		height: 85,
	},

	time: {
		fontSize: 64,
	},

	bottomButtonsWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},

	bottomButton: {
		width: 120,
		alignItems: "center",
	}
})

export default AlarmScreen
