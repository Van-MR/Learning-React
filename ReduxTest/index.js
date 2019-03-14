const { createStore } = require('redux');


let initState = {
    age:24,
    name: 'WillGrim'
}

const rootReducer = (state = initState,action) => {
    let newState = { ...state };
    if(action.type === 'Increment') {
        newState.age += action.payload;
    }
    if(action.type === 'Rename') {
       newState.name = action.payload;
    }
    return newState;
}




const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()));
})

store.dispatch({type:'Increment',payload:5});
store.dispatch({type:'Rename',payload:'Vanisher Shi'});

