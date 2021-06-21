import React from 'react'

//components
import { View } from 'react-native'
import DayButton from './DayButton'

//defaults
import BaseText from '../defaults/BaseText'
import CustomTheme from '../defaults/CustomTheme'

//icons
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

import styles from '../stylesheets/Calendar'

function Calendar() {
	const date = new Date()
	date.setDate(1)

	console.log(date.toDateString());
	return (
		<View style={styles.calendar}>
			<View style={styles.calendarHeader}>
				<View style={styles.calendarHeaderTop}>
					<View style={styles.monthSelector}>
						<MaterialIcons name="keyboard-arrow-left" size={20} color={CustomTheme.colors.primary} style={styles.arrow} />

						<BaseText style={styles.currMonthText}>June 2021</BaseText>

						<MaterialIcons name="keyboard-arrow-right" size={20} color={CustomTheme.colors.primary} style={styles.arrow} />
					</View>

					<MaterialCommunityIcons
						name="calendar-remove-outline"
						size={24}
						color="white"
						style={styles.excludeCalendar}
					/>
				</View>
				<View style={styles.calendarHeaderBottom}>
					<Feather
						name="repeat"
						size={16}
						color={CustomTheme.colors.primary}
						style={styles.recurButton}
					/>
					<BaseText style={styles.recurText}>every second week until Sep 9 2021</BaseText>
				</View>
			</View>
		</View>
	)
}


export default Calendar
