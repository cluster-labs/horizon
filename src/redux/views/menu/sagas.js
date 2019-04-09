import { all, put, call } from 'redux-saga/effects'
import { getLeftMenuData, getTopMenuData } from 'services/menu'

export function* GET_DATA() {
  const menuLeftData = yield call(getLeftMenuData)
  const menuTopData = yield call(getTopMenuData)
  yield put({
    type: 'menu/SET_STATE',
    payload: {
      menuLeftData,
      menuTopData,
    },
  })
}
//
export default function* rootSaga() {
  yield all([
    GET_DATA(), // run once on app load to fetch menu data
  ])
}
