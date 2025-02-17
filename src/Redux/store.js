import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'





export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
