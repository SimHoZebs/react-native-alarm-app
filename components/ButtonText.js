import React from 'react'
import { StyleSheet } from 'react-native'

//defaults
import BaseText from '../defaults/BaseText'

function ButtonText(props) {
	return (
		<BaseText
			style={styles.buttonText}
			fontFamily="fontMedium"
		>
			{props.children}
		</BaseText>
	)
}

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 24,
		color: "hsl(50,100%,71%)",
	}
})

export default ButtonText
