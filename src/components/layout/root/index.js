import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'

import { ROOT, USERS } from 'router/routes'

import { useStyles } from './styles'

// eslint-disable-next-line no-shadow
function Root({ route }) {
  const location = useLocation()
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to={ROOT}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              className={location?.pathname === ROOT && classes.active}
              primary="Home"
            />
          </ListItem>
        </Link>
        <Link to={USERS}>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              className={location?.pathname.includes(USERS) && classes.active}
              primary="Users"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  const container = window !== undefined ? window.document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            className={classes.menuButton}
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant="h6">
            Unisender
          </Typography>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders" className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden implementation="css" smUp>
          <Drawer
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{
              paper: classes.drawerPaper,
            }}
            container={container}
            open={mobileOpen}
            variant="temporary"
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden implementation="css" xsDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            open
            variant="permanent"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderRoutes(route.routes)}
      </main>
    </div>
  )
}

Root.propTypes = {
  route: PropTypes.object.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func.isRequired,
}

export default Root
