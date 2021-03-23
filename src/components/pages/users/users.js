import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import qs from 'qs'

import { DataGrid } from '@material-ui/data-grid'

import getTableData from './getTableData'

function Users({
  users,
  page,
  perPage,
  perPageOptions,
  totalCount,
  isLoading,
  error,
  onLoadUsers,
}) {
  const history = useHistory()
  const searchParams = history.location.search.replace('?', '')
  const urlParams = qs.parse(searchParams)

  useEffect(() => {
    const nextPage = Number(urlParams?.page)
    const nextPerPage = Number(urlParams?.perPage)

    const queryParams = {
      page,
      perPage,
    }

    if (
      nextPage > 0 &&
      nextPerPage > 0 &&
      perPageOptions.includes(nextPerPage)
    ) {
      queryParams.page = nextPage
      queryParams.perPage = nextPerPage
    } else {
      const path = `users?page=${page}&perPage=${perPage}`
      history.replace(path)
    }

    onLoadUsers(queryParams)
  }, [urlParams?.page, urlParams?.perPage])

  const handlePage = useCallback(params => {
    const path = `users?page=${params?.page + 1}&perPage=${params?.pageSize}`
    history.push(path)
  }, [])

  const { columns, rows } = getTableData(users)

  if (error) return <div>{error}</div>

  return (
    <div style={{ height: '90%', width: '100%' }}>
      <DataGrid
        columns={columns}
        loading={isLoading}
        page={page - 1}
        pageSize={perPage}
        pagination
        paginationMode="server"
        rowCount={totalCount}
        rows={rows}
        rowsPerPageOptions={perPageOptions}
        onPageChange={handlePage}
        onPageSizeChange={handlePage}
      />
    </div>
  )
}

Users.defaultProps = {
  error: '',
  isLoading: false,
  page: null,
  perPage: null,
  perPageOptions: [],
  totalCount: null,
  users: [],
  onLoadUsers: () => {},
}

Users.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  perPage: PropTypes.number,
  perPageOptions: PropTypes.array,
  totalCount: PropTypes.number,
  users: PropTypes.array,
  onLoadUsers: PropTypes.func,
}

export default Users
