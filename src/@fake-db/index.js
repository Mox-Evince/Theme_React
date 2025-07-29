import mock from './mock'

import './jwt'
import './select'

import './apps/calendar'
import './apps/userList'
import './pages/profile'

import './tables/datatables'

import './navbar/navbarSearch'

import './apps/permissionsList'
import './cards/card-analytics'
import './cards/card-statistics'
import './pages/account-settings'
import './autoComplete/autoComplete'

mock.onAny().passThrough()
