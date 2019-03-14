import { Add_age, Reduce_age } from './action'
import { UP_AGE, DOWN_AGE, DELETE_ITEN } from './type';

const initState = {
   age:24,
   history:[]
}

const rootReducer = (state = initState , action) => {
    //let newState = { ...state };
    switch (action.type) {
      case UP_AGE:
           return {
             ...state,
             age: state.age + action.payload,
             history: state.history.concat({id:Math.random(),age:state.age + action.payload})
           }
           break;
      case DOWN_AGE:
           return {
             ...state,
             age: state.age - action.payload,
             history: state.history.concat({id:Math.random(),age:state.age - action.payload})
           }
           break;
      case DELETE_ITEN:
           return {
              ...state,
              history: state.history.filter(item => item.id !== action.Id)
           }
      default:
        return state;
    }
}

export default rootReducer;
