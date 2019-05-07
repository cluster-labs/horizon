import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './views/user/reducers'
import menu from './views/menu/reducers'
import settings from './views/settings/reducers'
import cluster from './cluster/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    menu,
    settings,
    cluster
  })
