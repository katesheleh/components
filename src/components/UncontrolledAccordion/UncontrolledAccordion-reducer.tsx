export const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case 'TOGGLE_COLLAPSED': {
			return {...state, collapsed: !state.collapsed};
		}
		default:
			return state
	}
}


// TYPES

export type StateType = {
	collapsed: boolean
}

export type ActionType = {
	type: string
}