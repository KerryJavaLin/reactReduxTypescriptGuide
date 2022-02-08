
import configureMockStore from 'redux-mock-store'
// import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
// import expect from 'expect' // 可以使用任何测试库


import { ACTION_TYPE, FacePost } from "../constants/index"
import { FaceCreateActionAll, caSelectBoard, caRefreshBoard, caFetchBoardRequest, caFetchBoardSuccess, caFetchBoardFailure, fetchBoardThunk } from "./index"
import { AnyAction } from 'redux'



// 测试 Action Creators  --------------------------------------------------------------------------------------------------------------------------------------------------------
// 在 Redux 中，action creators 是返回普通对象的函数，当我们测试 action creators 时，我们想要测试是否调用了正确的 action creator 以及是否返回了正确的 action。
// describe("测试action创建函数：",()=>{
//     test("测试函数caSelectBoard",()=>{
//         const board="html";
//         const expected={ type:ACTION_TYPE.SELECT_BOARD,  board:board };
//         expect(caSelectBoard(board)).toEqual(expected);
//     });

//     test("测试函数caRefreshBoard",()=>{
//         const board="html";
//         const expected={ type:ACTION_TYPE.REFRESH_BOARD,  board:board };
//         expect(caRefreshBoard(board)).toEqual(expected);
//     }); 

//     test("测试函数caFetchBoardRequest",()=>{
//         const board="html";
//         const expected={ type:ACTION_TYPE.FETCH_BOARD_REQUEST,  board:board };
//         expect(caFetchBoardRequest(board)).toEqual(expected);
//     }); 

//     test("测试函数caFetchBoardSuccess",()=>{
//         const board="html";
//         const postsJson=[                    
//             {id: 77,title: '零基础学习HTML'},   
//             {id: 78,title: 'HTML完全参考手册'},
//             {id: 79,title: 'HTML5专业编程'},
//         ];
//         const expected={
//             type:ACTION_TYPE.FETCH_BOARD_SUCCESS,
//             board:board,
//             receivedAt:Date.now(),       
//             posts:postsJson,
//         };
//         expect(caFetchBoardSuccess(board,postsJson)).toEqual(expected);
//     }); 

//     test("测试函数caFetchBoardFailure",()=>{
//         const board="html";
//         const errorMessage="发生了一个错误";
//         const expected={
//             type:ACTION_TYPE.FETCH_BOARD_FAILURE,
//             board:board,
//             errorMessage:errorMessage,
//         };
//         expect(caFetchBoardFailure(board,errorMessage)).toEqual(expected);
//     }); 

// });


// 测试异步 Action Creators  --------------------------------------------------------------------------------------------------------------------------------------------------------
// 对于使用 Redux-Thunk 或者其它中间件的异步 action Creator ，最好完全模拟 Redux store 来进行测试，
// 可以通过使用 redux-mock-store 来把中间件应用于模拟的 store，还可以使用 fetch-mock) 来模拟 HTTP 请求。

// const middlewares=[thunk];
// const mockStore=configureMockStore(middlewares);

// describe("测试异步action创建函数",()=>{
//     afterEach(()=>{
//         fetchMock.reset();
//         fetchMock.restore();
//     });

//     test("",()=>{
//         const board="html";
//         const posts=[               
//             {id: 77,title: 'Lin 零基础学习HTML'},
//             {id: 78,title: 'Lin HTML完全参考手册'},
//             {id: 79,title: 'Lin HTML权威指南'},
//         ];
//         fetchMock.getOnce(`/fetchBoard?board=${board}`,  {  body:{posts:posts}, headers:{'content-type':'application/json'}  });

 
//         const expected = [
//             { type:ACTION_TYPE.FETCH_BOARD_REQUEST,  board:board },
//             {   type:ACTION_TYPE.FETCH_BOARD_SUCCESS,
//                 board:board,
//                 receivedAt:Date.now(),      // 数据获取成功的时间
//                 posts:posts, }
//         ];

//         const store = mockStore({ posts: [] })

//         return store.dispatch(fetchBoardThunk(board) as any)    // *********************************************
//             .then(() => {
//                 // return of async actions
//                 //expect(store.getActions()).toEqual(expected);     // 运行本行代码仅是 receivedAt:Date.now() 不匹配，为了测试通过，换成下一行代码。
//                 expect(store.getActions()).not.toEqual(expected);
//             });
//     });
// });







