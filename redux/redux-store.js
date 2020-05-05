import { createStore, combineReducers, applyMiddleware } from 'redux';
import { imageData } from './reducer';
import thunkMiddleware from 'redux-thunk'


const reducer = combineReducers({
    imageData
})

const createStorewithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export const store = createStorewithMiddleware(reducer)