// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// // import { App } from './App';
// // import { App } from './AppJest';
// // import { App } from './AppReactTestingLibraryGitHub';


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
        
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// ----------------------------------------------------------------------------------------------------------------
// async项目的index.tsx内的内容

import React from 'react'
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'

import thunk from "redux-thunk"
// import logger,{ createLogger } from 'redux-logger'

import  { reducer }  from "./async/reducers/index"
import { AppWrapped } from './async/AppWrapped';

import {} from "./async/reducers/todos"




const middlewares:any = [ thunk ];
if (process.env.NODE_ENV !== 'production') {    // process.env.NODE_ENV 未设置之前的默认值是：development
    middlewares.push(myLogger);     //logger 中间件必须放在所有中间件的最后，不然会出现部分action无法打印日志的情况
}

const store = createStore(reducer,applyMiddleware(...middlewares));     

ReactDOM.render(
    <Provider store={store}>
        <AppWrapped />

    </Provider>,
    document.getElementById("root")
);



// 我自己的中间件myLogger
function myLogger(store:any){
    return function(next:any){
        return function(action:any){
            console.log("--------------",action);
            console.log("派发action前的state:",store.getState());
            let ret=next(action);
            console.log("派发action后的state:",store.getState());

            return ret;
        }
    }
}






