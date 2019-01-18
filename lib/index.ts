import { take, SelectEffect } from 'redux-saga/effects'

export function * waitFor (selectEffect: SelectEffect) {
  if (yield selectEffect) {
    return true
  }
  while (true) {
    yield take('*')
    if (yield selectEffect) {
      return true
    }
  }
}
