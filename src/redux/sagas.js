import { all } from 'redux-saga/effects'
import user from './views/user/sagas'
import menu from './views/menu/sagas'
import settings from './views/settings/sagas'

export default function* rootSaga() {
  yield all([user(), menu(), settings()])
}
