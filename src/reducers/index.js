import { combineReducers } from 'redux-immutable'
import { Map, List } from 'immutable'
import * as Actions from '../actions/index'

let initialState = Map({
  modalStack: List()
})

const modalStack = (state = initialState.get('modalStack'), action) => {
  switch (action.type) {
    case Actions.STACK_MODAL:
      return state.push(
        Map({
          component: action.value,
          title: action.title,
        })
      )
    case Actions.POP_MODAL:
      return state.pop()
    default:
      return state
  }
}

const reducer = combineReducers({
  modalStack
})

export default (state, action) => {
  if (action.type === Actions.RESET_STATE) {
    return reducer(undefined, action)
  } else {
    return reducer(state, action)
  }
}
