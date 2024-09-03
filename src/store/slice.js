import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
	name: 'main',
	initialState: {
		ListItems: [],
	},
	reducers: {
		addListItem(state, actions) {
			state.ListItems.unshift(actions.payload)
		},
		removeListItem(state, actions) {
			state.ListItems.pop()
		},
	},
})

export default toolkitSlice.reducer
export const { addListItem, removeListItem } = toolkitSlice.actions
