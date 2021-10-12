import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import { weatherReducer } from './reducers/weatherReducer'
import { favoritesReducer } from './reducers/favoritesReducer'
import { toastReducer } from './reducers/toastReducer'
import { preferencesReducer } from './reducers/preferencesReducer'

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
	weatherModule: weatherReducer,
	favoriteModule: favoritesReducer,
	toastModule: toastReducer,
	preferenceModule: preferencesReducer,
})

// createStore-from redux. return store obj 
// thunk - can write async action- all actions will pass through 'thunk' and
//  return function (that gets a dispatch in parameter) and that will give us access to the store and service
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
