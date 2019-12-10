const redux = require("redux");
const createStore = redux.createStore;

// initialize state

const initialState = {
    counter: 0
}

// reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER"){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "ADD_COUNTER"){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    else{
        return state;
    }
}

// store

const store = createStore(rootReducer);

console.log("store", store.getState());

// subscription

store.subscribe(()=>{
    console.log("subscribe", store.getState());
})

// dispatching Actions

store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 10});

console.log("Actions", store.getState());