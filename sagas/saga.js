/* global fetch */

import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { actionTypes, failure, loadDataSuccess, tickClock, incrementBySaga, submitForm } from '../actions/actions';

es6promise.polyfill();

// function * runClockSaga () {
//   yield take(actionTypes.START_CLOCK)
//   while (true) {
//     yield put(tickClock(false))
//     yield delay(1000)
//   }
// }
//
// function * loadDataSaga () {
//   try {
//     const res = yield fetch('https://jsonplaceholder.typicode.com/users')
//     const data = yield res.json()
//     yield put(loadDataSuccess(data))
//   } catch (err) {
//     yield put(failure(err))
//   }
// }


// DONE
export function* watcherInc(){
  // action type and CALLBACK to fire IF the action type MATCHES
  yield takeEvery(actionTypes.INC_BY_SAGA, workerInc);
}
export function* workerInc(action){
  // Dispatch a NEW action object with a NEW TYPE
  yield put({type:'INC_200', payload: 200});
}

// 👇👇👇
// let submitAction;

//1. WATCHER!!!
export function* watcherForSubmit(){
  yield takeEvery(actionTypes.SUBMIT_FORM, workerForSubmit)
}
//2. WORKER!!!
export function* workerForSubmit(action){
  yield put({type: "SUBMIT_2", payload: action.payload})
  // console.log('action', action);
}




function* rootSaga() {
  yield all([
    watcherInc(),
    call(watcherForSubmit),
    // takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ]);
}

export default rootSaga;
