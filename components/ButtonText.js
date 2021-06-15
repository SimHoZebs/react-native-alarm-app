import React from 'react'
import { Text, StyleSheet } from 'react-native'

//defaults
import BaseText from '../defaults/BaseText'

function ButtonText(props) {
	return (
		<BaseText
			style={styles.buttonText}
			fontFamily="RedHatDisplay_500Medium"
		>
			{props.children}
		</BaseText>
	)
}

const styles = StyleSheet.create({
	buttonText: {
		marginVertical: 15,
		fontSize: 24,
		color: "hsl(50,100%,71%)",
	}
})

export default ButtonText
