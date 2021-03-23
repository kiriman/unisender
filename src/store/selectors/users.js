import { createSelector } from 'reselect'

export const getState = state => state.users

export const getUsers = createSelector(getState, state => state.users)
export const getPageUsers = createSelector(getState, state => state.page)
export const getPerPageUsers = createSelector(getState, state => state.perPage)
export const getPerPageOptionsUsers = createSelector(
  getState,
  state => state.perPageOptions,
)
export const getTotalCountUsers = createSelector(
  getState,
  state => state.totalCount,
)
export const loadingUsers = createSelector(getState, state => state.isLoading)
export const loadingUsersError = createSelector(getState, state => state.error)
