import { createReducer } from 'store/utils'

import { LOAD_USERS } from 'store/actions/users'

const PER_PAGE_OPRIONS = [10, 20, 50]
const initialState = {
  users: [],
  page: 1,
  perPage: PER_PAGE_OPRIONS[0],
  perPageOptions: PER_PAGE_OPRIONS,
  totalCount: 0,
  isLoading: false,
  isLoaded: false,
  error: null,
}

const loadUsersRequest = state =>
  state.merge({
    isLoading: true,
    error: null,
  })

const loadUsersSuccess = (state, { users, page, perPage, totalCount }) =>
  state.merge({
    users,
    page,
    perPage,
    totalCount,
    isLoading: false,
    isLoaded: true,
  })

const loadUsersFailure = (state, { error }) =>
  state.merge({
    isLoading: false,
    error: error || 'Loading error',
  })

const handlers = {
  [LOAD_USERS.REQUEST]: loadUsersRequest,
  [LOAD_USERS.SUCCESS]: loadUsersSuccess,
  [LOAD_USERS.FAILURE]: loadUsersFailure,
}

export default createReducer(initialState, handlers)
