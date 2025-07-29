// ** Navigation imports
import apps from './apps'
import pages from './pages'

import tables from './tables'


import dashboards from './dashboards'
import uiElements from './ui-elements'

// ** Merge & Export
export default [...dashboards, ...apps, ...pages, ...uiElements,, ...tables]
