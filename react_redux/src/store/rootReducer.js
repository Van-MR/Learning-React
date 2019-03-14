import { Add_age, Reduce_age } from './action'
import { UP_AGE, DOWN_AGE } from './type';

const initState = {
   age: 24
}

const rootReducer = (state = initState , action) => {
    let newState = { ...state };
    if(action.type === UP_AGE) {
      newState.age += action.payload;
    }
    if(action.type === DOWN_AGE ) {
      newState.age -= action.payload;
    }
    return newState;
}

export default rootReducer;
