

import React from 'react';

import { Select } from "./components/Select"
import { ListPosts } from "./components/ListPosts"
import { FacePost } from "./constants/index"
import { caSelectBoard, caRefreshBoard, fetchBoardThunkIfNeeded } from "./actions/index"


const posts=[                     // 获取到的此子版块的帖子列表 
    {id: 77,title: '零基础学习HTML'},   
    {id: 78,title: 'HTML完全参考手册'},
    {id: 79,title: 'HTML5专业编程'},
];


interface PropsApp{
    selectedBoard:string;
    errorMessage:string|undefined;
    isFetching:boolean;
    lastUpdate:number|undefined;
    dispatch:Function;
    posts:FacePost[];
}

//console.log(111,this.props);  //{selectedBoard: 'vue', posts: Array(0), isFetching: true, lastUpdate: undefined, errorMessage:null, dispatch: ƒ}
export class App extends React.Component<PropsApp>{

    componentDidMount(){
        const {selectedBoard,dispatch}=this.props;
        dispatch(fetchBoardThunkIfNeeded(selectedBoard));
    }
    componentDidUpdate(prevProps:any){
        // dispatch(selectBoard(...)会导致：上一个state与本次的state的selectedBoard不一样时候
        if (prevProps.selectedBoard !== this.props.selectedBoard) { 
            const { dispatch, selectedBoard } = this.props
            dispatch(fetchBoardThunkIfNeeded(selectedBoard));
        }
    }

    handleChange = (e:any)=>{
        this.props.dispatch(caSelectBoard(e.target.value));
    }
    handleRefresh = ()=>{
        const { dispatch, selectedBoard } = this.props
        dispatch(caRefreshBoard(selectedBoard));
        dispatch(fetchBoardThunkIfNeeded(selectedBoard));
    }

    render(): React.ReactNode {
        //console.log(5555,this.props);
        const { selectedBoard,errorMessage,isFetching,lastUpdate,dispatch,posts }=this.props;
        //console.log(111,posts);
        return <div>
            当前所在子版块{selectedBoard}<br/>
            <hr/>

            <Select selectedBoard={selectedBoard}  options={["html","react","vue"]}  onChange={this.handleChange}  />  <br/> <br/> 

            {
            isFetching?
            <div><br/>数据获取中...<br/><br/><br/></div>
            :
            <div><ListPosts posts={posts} />  <br/> </div>
            }

            最后更新时间：{ lastUpdate?new Date(lastUpdate).toLocaleString():"****" }
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleRefresh}>刷新</button>
        </div>;
    }
}







