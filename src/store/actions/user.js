import { createAsyncAction } from 'store/utils'

const API_URL = process.env.REACT_APP_API_URL

export const LOAD_USER = createAsyncAction('user/LOAD')

export const loadUserRequest = () => ({
  type: LOAD_USER.REQUEST,
})

export const loadUserSuccess = ({ user }) => ({
  type: LOAD_USER.SUCCESS,
  user,
})

export const loadUserFailure = ({ error }) => ({
  type: LOAD_USER.FAILURE,
  error,
})

export const loadUser = ({ username }) => async dispatch => {
  dispatch(loadUserRequest())

  const fetchUrl = `${API_URL}users/${username}`
  const response = await fetch(fetchUrl)
  const user = await response.json()

  if (!response?.ok) {
    dispatch(loadUserFailure({ error: user?.message }))
  } else {
    dispatch(
      loadUserSuccess({
        user,
      }),
    )
  }
}
