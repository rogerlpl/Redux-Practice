import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index'
import { Map as map } from 'immutable';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// function logger({getState, dispatch}){
//     // return (metodo para despachar el siguiente middleware) => {
//     return (next) => {
//         return (action)=> {
//             console.log('este es mi estado actual', getState().toJS())
//             console.log('vamos a enviar esta accion', action)
//             const value = next(action)
//             console.log('este es mi nuevo estado', getState().toJS())
//             return value
//         }
//     }
// }

// const logger= ({getState, dispatch}) => next => action =>{
//     console.log('este es mi estado actual', getState().toJS())
//     console.log('vamos a enviar esta accion', action)
//     const value = next(action)
//     console.log('este es mi nuevo estado', getState().toJS())
//     return value
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
);

const homeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , homeContainer);

