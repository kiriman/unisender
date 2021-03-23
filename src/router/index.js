import { RootLayout } from 'components/layout'
import { HomePage, UsersPage, UserPage } from 'components/pages'
import { ROOT, USERS, USER } from './routes'

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: ROOT,
        exact: true,
        component: HomePage,
      },
      {
        path: USERS,
        exact: true,
        component: UsersPage,
      },
      {
        path: USER(),
        exact: true,
        component: UserPage,
      },
    ],
  },
]

export default routes
