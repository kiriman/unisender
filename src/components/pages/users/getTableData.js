import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

import { USER } from 'router/routes'

export default users =>
  useMemo(() => {
    const columns = [
      { field: 'id' },
      {
        field: 'avatar',
        headerName: 'Avatar',
        // eslint-disable-next-line react/prop-types
        renderCell: ({ value }) => <Avatar src={value} />,
      },
      {
        field: 'username',
        headerName: 'Username',
        description:
          'The identification used by the person with access to the online service.',
        flex: 1,
      },
      {
        field: 'login',
        headerName: ' ',
        // eslint-disable-next-line react/prop-types
        renderCell: ({ value }) => <Link to={USER(value)}>Detail</Link>,
      },
    ]

    const rows = users.map(user => ({
      id: user?.id,
      username: user?.login,
      avatar: user?.avatar_url,
      login: user?.login,
    }))

    return { columns, rows }
  }, [users])
