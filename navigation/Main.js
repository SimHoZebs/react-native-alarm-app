import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';

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
	}, [])

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
		</BaseView>
	)
}

const styles = StyleSheet.create({
	header: {
		marginTop: 100,
	},

	headerRemainingTime: {
		paddingTop: 5,
		fontSize: 34
	}
});

export default Main