import usersReducers from "../reducers/usersReducers";
import {createStore} from 'redux'

const store = createStore(usersReducers)

export default store;