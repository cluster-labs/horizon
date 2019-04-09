import { all, takeEvery, put } from 'redux-saga/effects'
import store from 'store'
import qs from 'qs'
import { history, store as reduxStore } from 'index'
import actions from './actions'

export function* CHANGE_SETTING({ payload: { setting, value } }) {
  yield store.set(`app.settings.${setting}`, value)
  yield put({
    type: 'settings/SET_STATE',
    payload: {
      [setting]: value,
    },
  })
}

export function* SETUP() {
  // load settings from url on app load
  const changeSettings = search => {
    const query = qs.parse(search, { ignoreQueryPrefix: true })
    Object.keys(query).forEach(key => {
      reduxStore.dispatch({
        type: 'settings/CHANGE_SETTING',
        payload: {
          setting: key,
          value: query[key] === 'true',
        },
      })
    })
  }
  yield changeSettings(history.location.search)
  yield history.listen(params => {
    const { search } = params
    changeSettings(search)
  })

  // detect isMobileView setting on app load and window resize
  const isMobileView = (load = false) => {
    const currentState = global.window.innerWidth < 768
    const prevState = store.get('app.settings.isMobileView')
    if (currentState !== prevState || load) {
      reduxStore.dispatch({
        type: 'settings/CHANGE_SETTING',
        payload: {
          setting: 'isMobileView',
          value: currentState,
        },
      })
    }
  }
  yield isMobileView(true)
  yield window.addEventListener('resize', () => {
    isMobileView()
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    SETUP(), // run once on app load to init listeners
  ])
}
