import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loadUsers } from 'store/actions/users'
import {
  getUsers,
  getPageUsers,
  getPerPageUsers,
  getPerPageOptionsUsers,
  getTotalCountUsers,
  loadingUsers,
  loadingUsersError,
} from 'store/selectors/users'

import Users from './users'

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  page: getPageUsers,
  perPage: getPerPageUsers,
  perPageOptions: getPerPageOptionsUsers,
  totalCount: getTotalCountUsers,
  isLoading: loadingUsers,
  error: loadingUsersError,
})

const mapDispatchToProps = {
  onLoadUsers: loadUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
