import React from 'react'
import styles from './CustomButton.module.css'

const CustomButton = props => {
	return (
		<button
			onClick={props.onClick}
			className={styles.CustomButton}
			style={{ background: props.color }}
		>
			{props.children}
		</button>
	)
}

export default CustomButton
