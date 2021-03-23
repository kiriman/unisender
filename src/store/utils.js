import Immutable from 'seamless-immutable'

export const createReducer = (initialState, handlers) => (
  state = Immutable(initialState),
  action,
) => (handlers[action.type] ? handlers[action.type](state, action) : state)

export const createAsyncAction = type => ({
  REQUEST: `${type}.REQUEST`,
  SUCCESS: `${type}.SUCCESS`,
  FAILURE: `${type}.FAILURE`,
})
