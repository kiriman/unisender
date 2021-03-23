import { createReducer } from 'store/utils'

import { LOAD_USER } from 'store/actions/user'

const initialState = {
  users: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

const loadUserRequest = state =>
  state.merge({
    isLoading: true,
    error: null,
  })

const loadUserSuccess = (state, { user }) =>
  state.merge({
    user,
    isLoading: false,
    isLoaded: true,
  })

const loadUserFailure = (state, { error }) =>
  state.merge({
    isLoading: false,
    error: error || 'Loading error',
  })

const handlers = {
  [LOAD_USER.REQUEST]: loadUserRequest,
  [LOAD_USER.SUCCESS]: loadUserSuccess,
  [LOAD_USER.FAILURE]: loadUserFailure,
}

export default createReducer(initialState, handlers)
