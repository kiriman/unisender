import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 12,
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  cover: {
    width: 120,
    height: 120,
    borderRadius: '50%',
  },
}))
