// ** Navigation imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'


import dashboards from './dashboards'

// ** Merge & Export
export default [...dashboards, ...apps, ...pages, ...forms, ...tables]
