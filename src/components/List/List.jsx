import React from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ListItem from '../ListItem/ListItem'
import ItemStyles from '../ListItem/ListItem.module.css'
import styles from './List.module.css'
const List = props => {
	const ListItems = useSelector(state => state.main.ListItems)

	return (
		<TransitionGroup className={styles.List}>
			{ListItems?.map(item => (
				<CSSTransition
					key={item.backgroundColor}
					timeout={500}
					classNames={{
						enterActive: ItemStyles.ListItemEnterActive,
						enterDone: ItemStyles.ListItemEnterDone,
						exitActive: ItemStyles.ListItemExitActive,
						exitDone: ItemStyles.ListItemExit,
					}}
				>
					<ListItem item={item} />
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default List
