import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import CustomTheme from './CustomTheme'

function BaseView(props) {
	return (
		<View style={styles.baseView}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	baseView: {
		flex: 1,
		backgroundColor: CustomTheme.colors.background,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
})
export default BaseView
