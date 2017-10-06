import {combineReducers} from 'redux';

const results=(state=[],action)=>{
    debugger;
    if(action.type === 'result'){
        return action.payload.data.items
    }
    return state;
}

const stores=combineReducers({results:results});
// Combine Reducers compares prev state and new state and checks
export default stores;