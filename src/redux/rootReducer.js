// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import users from '@src/views/apps/user/store'


import permissions from '@src/views/apps/roles-permissions/store'

const rootReducer = {
  auth,
  users,
  navbar,
  layout,


  permissions
}

export default rootReducer
