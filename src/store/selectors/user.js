import { createSelector } from 'reselect'

export const getState = state => state.user

export const getUser = createSelector(getState, state => state.user)
export const loadingUser = createSelector(getState, state => state.isLoading)
export const loadingUserError = createSelector(getState, state => state.error)
