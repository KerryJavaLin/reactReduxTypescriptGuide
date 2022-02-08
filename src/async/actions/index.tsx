

import { Dispatch, AnyAction } from "redux"
import fetch from 'cross-fetch'

import { ACTION_TYPE, FacePost, FaceState } from "../constants/index"


export interface FaceCaSelectBoard{ type:string; board:string; }
export function caSelectBoard(board:string):FaceCaSelectBoard{                               // 重新选择某个子版块
    return { type:ACTION_TYPE.SELECT_BOARD,  board:board };
}

export interface FaceCaRefreshBoard{ type:string; board:string; }
export function caRefreshBoard(board:string):FaceCaRefreshBoard{                              // 刷新某个子版块
    return { type:ACTION_TYPE.REFRESH_BOARD,  board:board };
}

export interface FaceCaFetchBoardRequest{ type:string; board:string; }
export function caFetchBoardRequest(board:string):FaceCaFetchBoardRequest{                             // 获取某个子版块的数据：开始发送请求 
    return { type:ACTION_TYPE.FETCH_BOARD_REQUEST,  board:board };
}

export interface FaceCaFetchBoardSuccess{ type:string; board:string; receivedAt:number; posts:Array<FacePost> }
export function caFetchBoardSuccess(board:string, postsJson:Array<FacePost>):FaceCaFetchBoardSuccess{  // 获取某个子版块的数据：获取响应成功
    return {
        type:ACTION_TYPE.FETCH_BOARD_SUCCESS,
        board:board,
        receivedAt:Date.now(),      // 数据获取成功的时间
        posts:postsJson,
    };
}

export interface FaceCaFetchBoardFailure{ type:string; board:string; errorMessage:string }
export function caFetchBoardFailure(board:string, errorMessage:string):FaceCaFetchBoardFailure{        // 获取某个子版块的数据：获取响应失败 
    return {
        type:ACTION_TYPE.FETCH_BOARD_FAILURE,
        board:board,
        errorMessage:errorMessage,
    };
}


export type FaceCreateActionAll = FaceCaSelectBoard | FaceCaRefreshBoard | FaceCaFetchBoardRequest | FaceCaFetchBoardSuccess | FaceCaFetchBoardFailure ;
// 从服务器获取某版块的数据
export function fetchBoardThunk(board:string){
    //console.log(444555);
    return function(dispatch:Dispatch<FaceCreateActionAll>){
      
        dispatch(caFetchBoardRequest(board));
        return fetch(`http://localhost:8666/fetchBoard?board=${board}`)
            .then( response=>response.json() )          // response.json()返回一个Promise
            .then(
                postsJson=>dispatch(caFetchBoardSuccess(board,postsJson)),
                error=>dispatch(caFetchBoardFailure(board,error))
            )
            .catch(error=>console.log("产生了一个错误：",error));
    }
}


export function fetchBoardThunkIfNeeded(board:string){
    return function(dispatch:any,getState:any){
        // if(shouldFetchBoard(getState(), board)){
        //     dispatch(fetchBoard(board));
        //     //fetchBoard(board)(dispatch);      //这样写也ok
        // }

        dispatch(fetchBoardThunk(board));
    }
}





// // 是否要从服务器获取数据：true为从服务器获取，false为从state中获取缓存数据。
// function shouldFetchBoard(state:FaceState, board:string){
//     if(){

//     }
// }



// // 是否要从服务器获取数据，否的话是从state中获取缓存数据
// const shouldFetchBoard = (state, board) => {
//     if (board.isFetching) {     // 正在从服务器获取数据的话，则停止获取数据
//         return false;
//     }
//     const hasBoard = state.boards[board]
//     if (!hasBoard) {       // 如果state中没有此子版块的数据，则从服务器获取获取之
//         return true;
//     }

//     return state.boards[board].isFromServer;  // isFromServer初始默认值为true；点击刷新按钮时，isFromServer重置为true; 获取数据之后isFromServer重置为false
// }

// export function fetchBoardIfNeeded(board){
//     return function(dispatch,getState){
//         if(shouldFetchBoard(getState(), board)){
//             dispatch(fetchBoard(board));
//             //fetchBoard(board)(dispatch);      //这样写也ok
//         }
//     }
// }




