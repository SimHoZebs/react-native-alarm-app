import React from 'react'
import { StyleSheet, View } from 'react-native'
import DayButton from './DayButton'

function WeekButtons(props) {
	const days = ["Sunday", "M", "T", "W", "T", "F", "S"]

	return (
		<View style={styles.dayButtonsWrapper}>
			{days.map((day, index) => (
				<DayButton
					key={index}
					day={day}
					activeDays={props.activeDays[index]}
				/>))}
		</View>
	)
}

const styles = StyleSheet.create({

	dayButtonsWrapper: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
})

export default WeekButtons
