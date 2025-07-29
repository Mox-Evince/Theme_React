// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import users from '@src/views/apps/user/store'
import invoice from '@src/views/apps/invoice/store'
import ecommerce from '@src/views/apps/ecommerce/store'

import permissions from '@src/views/apps/roles-permissions/store'

const rootReducer = {
  auth,
  users,
  navbar,
  layout,
  invoice,
  ecommerce,

  permissions
}

export default rootReducer
