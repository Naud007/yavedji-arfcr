import { all } from 'redux-saga/effects';
import { appSettingsSaga } from "./appSettingsSaga"
import { appProfileSaga } from './appProfileSaga'



export function* rootSaga() {
  yield all([
    ...appSettingsSaga,
    ...appProfileSaga
  ])
}