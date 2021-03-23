import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { loadUser } from 'store/actions/user'
import { getUser, loadingUser, loadingUserError } from 'store/selectors/user'

import { useStyles } from './styles'

function User() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const user = useSelector(getUser)
  const isLoading = useSelector(loadingUser)
  const error = useSelector(loadingUserError)

  const { id } = useParams()

  useEffect(() => {
    dispatch(loadUser({ username: id }))
  }, [id])

  if (isLoading) {
    return <CircularProgress disableShrink />
  }

  if (error) return <div>{error}</div>

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={user?.avatar_url} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {user?.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {user?.company}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            From: {DateTime.fromISO(user?.created_at).toFormat('dd/MM/yyyy')}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

User.defaultProps = {}

User.propTypes = {}

export default User
