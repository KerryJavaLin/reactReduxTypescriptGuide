

// action的类型
export const ACTION_TYPE={
    SELECT_BOARD:"SELECT_BOARD",                    // 选择某个子版块，替换掉当前的子版块
    REFRESH_BOARD:"REFRESH_BOARD",                  // 刷新某个子版块，之后从服务器而非缓存state中获取这个子版块的数据。

    FETCH_BOARD_REQUEST:"FETCH_BOARD_REQUEST",      // 获取某个子版块的数据：开始发送请求 
    FETCH_BOARD_SUCCESS:"FETCH_BOARD_SUCCESS",      // 获取某个子版块的数据：获取响应成功
    FETCH_BOARD_FAILURE:"FETCH_BOARD_FAILURE",      // 获取某个子版块的数据：获取响应失败 
};


export interface FacePost{
    id:number;
    title:string;
}
export interface FaceBoard{
    isFetching:boolean;
    isFromServer:boolean;
    lastUpdate:number|undefined;
    posts:Array<FacePost>;
}
export interface FaceBoards{
    // html:FaceBoard;
    // react:FaceBoard,
    // vue:FaceBoard,
    [index:string]:FaceBoard;   // 索引签名表示了当用string去索引FaceBoards时会得到FaceBoard类型的返回值。

}
export interface FaceState{
    selectedBoard:string,
    errorMessage:string,

    boards:FaceBoards,
}


// state的结构
const aState:FaceState={
    selectedBoard:"html",   // 当前被选中的子版块
    errorMessage:"",        // 错误信息

    boards:{    // 多个子版块
        html:{  // 子版块1 "html"
            isFetching:false,           // 是否是"正在获取中"，为true的话，UI中显示为一个正在获取数据的提示。
            isFromServer:false,         // true:从服务器获取数据  false:从state中获取数据  初次获取数据&&用户点击“刷新”按钮时候，要从服务器获取数据。
            lastUpdate:1439478605547,   // 数据(此state中的数据)最后更新时间，最近一次从服务器获取数据的时间。
            posts:[                     // 获取到的此子版块的帖子列表 
                {id: 77,title: '零基础学习HTML'},   
                {id: 78,title: 'HTML完全参考手册'},
                {id: 79,title: 'HTML5专业编程'},
            ],
        },
        react:{      // 子版块2 "react"
            isFetching:false,           
            isFromServer:false,           
            lastUpdate:14394784056847,   
            posts:[                     
                {id: 121,title: 'react入门经典'},
                {id: 122,title: 'react高级编程'},
                {id: 123,title: 'react真实案例解析'},
            ],  
        },
        vue:{       // 子版块3 "vue"
            isFetching:false,           // 默认值 
            isFromServer:true,          // 默认值 
            lastUpdate:undefined,       // 默认值 
            posts:[],                   // 默认值 
        },
    },


};



