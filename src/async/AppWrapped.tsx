

import React from 'react';
import { connect } from "react-redux"

import { App } from "./App"
import { FaceState } from "./constants/index"


//console.log(111,this.props);  //{selectedBoard: 'vue', posts: Array(0), isFetching: true, lastUpdate: undefined, errorMessage:null, dispatch: ƒ}
function mapStateToProps(state:FaceState){
    const {selectedBoard,errorMessage}=state;
    const {isFetching,lastUpdate,posts}=state.boards[selectedBoard] || {isFetching:true,lastUpdate:undefined,posts:[]};

    return {
        selectedBoard:selectedBoard,
        errorMessage:errorMessage,

        isFetching:isFetching,
        lastUpdate:lastUpdate,
        posts:posts,
    };
}

export const AppWrapped=connect(mapStateToProps)(App);







// //{selectedBoard: 'vue', posts: Array(0), isFetching: true, lastUpdate: undefined, dispatch: ƒ}
// function mapStateToProps(state){
//     const {selectedBoard,errorMessage}=state;
//     const {isFetching,lastUpdate,posts}=state.boards[selectedBoard] || {isFetching:true,lastUpdate:undefined,posts:[]};

//     return {
//         selectedBoard:selectedBoard,
//         errorMessage:errorMessage,

//         isFetching:isFetching,
//         lastUpdate:lastUpdate,
//         posts:posts,
//     };
// }

// const AppWrapped=connect(mapStateToProps)(App);

// export { AppWrapped }


