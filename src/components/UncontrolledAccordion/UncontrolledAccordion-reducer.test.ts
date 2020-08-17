import {reducer, StateType} from './UncontrolledAccordion-reducer';

test('Collapsed should be true', () => {
	// data
	const state: StateType = {
		collapsed: false
	}
	// expect
	const newState = reducer(state, {type: 'TOGGLE_COLLAPSED'})

	// result
	expect(newState.collapsed).toBe(true)
})


test('Collapsed should be false', () => {
	// data
	const state: StateType = {
		collapsed: true
	}
	// expect
	const newState = reducer(state, {type: 'TOGGLE_COLLAPSED'})

	// result
	expect(newState.collapsed).toBe(false)

})