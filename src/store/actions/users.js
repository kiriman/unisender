import { createAsyncAction } from 'store/utils'

const API_URL = process.env.REACT_APP_API_URL

export const LOAD_USERS = createAsyncAction('users/LOAD')

export const loadUsersRequest = () => ({
  type: LOAD_USERS.REQUEST,
})

export const loadUsersSuccess = ({ users, page, perPage, totalCount }) => ({
  type: LOAD_USERS.SUCCESS,
  users,
  page,
  perPage,
  totalCount,
})

export const loadUsersFailure = ({ error }) => ({
  type: LOAD_USERS.FAILURE,
  error,
})

export const loadUsers = params => async (dispatch, getState) => {
  const usersState = getState().users
  const page = params?.page || usersState.page
  const perPage = params?.perPage || usersState.perPage
  dispatch(loadUsersRequest())

  const fetchUrl = `${API_URL}search/users?q=type:user&page=${page}&per_page=${perPage}`
  const response = await fetch(fetchUrl)
  const parseResponse = await response.json()

  if (!response?.ok) {
    dispatch(loadUsersFailure({ error: parseResponse?.message }))
  } else {
    const { items, total_count } = parseResponse

    dispatch(
      loadUsersSuccess({
        users: items,
        page,
        perPage,
        totalCount: total_count,
      }),
    )
  }
}
