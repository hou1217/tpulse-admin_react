import {createStore} from 'redux'//applyMiddleware,compose删去
import reducer from './reducer'
// import thunk from 'redux-thunk'

// 使用增强函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store