import React from 'react'
import { useDispatch } from 'react-redux'
import { addListItem, removeListItem } from '../../store/slice'
import CustomButton from '../CustomButton/CustomButton'
import styles from './ButtonsGroup.module.css'

const ButtonsGroup = props => {
	const dispatch = useDispatch()

	const randomColor = () => {
		const letters = '0123456789ABCDEF'
		let color = '#'
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		return color
	}

	const onAddButtonClick = () => {
		dispatch(
			addListItem({
				backgroundColor: randomColor(),
			})
		)
	}

	const onDeleteButtonClick = () => {
		dispatch(removeListItem())
	}

	return (
		<div className={styles.ButtonsGroup}>
			<CustomButton onClick={onAddButtonClick} color={'#b5cd9c'}>
				Добавить
			</CustomButton>
			<CustomButton onClick={onDeleteButtonClick} color={'#cd9c9d'}>
				Удалить
			</CustomButton>
		</div>
	)
}

export default ButtonsGroup
