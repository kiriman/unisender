import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 'calc(100% - 64px)',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#EBFCFF',
  },
  media: {
    width: 400,
    height: 350,
  },
}))
