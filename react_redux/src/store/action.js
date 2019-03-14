import { UP_AGE, DOWN_AGE } from './type';

export const Add_age = payload => {
  return {
    type: UP_AGE,
    payload
  }
}

export const Reduce_age = payload => {
  return {
    type: DOWN_AGE,
    payload
  }
}
