import { UP_AGE, DOWN_AGE, DELETE_ITEN} from './type';

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

export const Remove_item = Id => {
    return {
        type: DELETE_ITEN,
        Id
    }
}
