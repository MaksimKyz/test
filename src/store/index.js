import { combineReducers, configureStore } from '@reduxjs/toolkit'
import slice from './slice'

const rootReducer = combineReducers({
	main: slice,
})

export const store = configureStore({
	reducer: rootReducer,
})
