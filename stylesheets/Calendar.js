import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	calendar: {
		borderRadius: 15,
		marginTop: 15,
		backgroundColor: "hsl(0,0%,15%)",
		height: 320
	},

	calendarHeader: {
		marginTop: 5,
		marginHorizontal: 5,
		paddingVertical: 10,
		paddingHorizontal: 10,

		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,

		backgroundColor: "black"
	},

	calendarHeaderTop: {
		flexDirection: "row",
		justifyContent: "space-between"
	},


	excludeCalendar: {
		alignSelf: "center",
	},

	monthSelector: {
		flexDirection: "row",
		alignItems: "center",
	},


	currMonthText: {
		marginHorizontal: 5,
		fontSize: 24
	},

	calendarHeaderBottom: {
		flexDirection: "row",
		alignItems: "flex-end"
	},

	recurButton: {
		marginRight: 5,
	},

	recurText: {
		marginTop: 10,
		color: "white"
	}
})

export default styles