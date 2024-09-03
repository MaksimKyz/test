import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ListItem.module.css'
const ListItem = props => {
	return (
		<CSSTransition
			key={props.item.backgroundColor}
			timeout={100}
			classNames='item'
		>
			<div
				style={{ background: props.item.backgroundColor }}
				className={styles.ListItem}
			/>
		</CSSTransition>
	)
}

export default ListItem
