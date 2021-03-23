import React from 'react'

import CardMedia from '@material-ui/core/CardMedia'

import { bgImage } from 'assets'

import { useStyles } from './styles'

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CardMedia className={classes.media} image={bgImage} />
    </div>
  )
}

Home.defaultProps = {}

Home.propTypes = {}

export default Home
