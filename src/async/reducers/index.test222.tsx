

import { selectedBoard, errorMessage, boards } from "./index"
import { ACTION_TYPE } from "../constants/index"

// 测试 Reducers  --------------------------------------------------------------------------------------------------------------------------------------------------------
// Reducer 把 action 应用到之前的 state，并返回新的 state。示例如下。


// describe("测试函数selectedBoard：",()=>{
//     test("action.type不是ACTION_TYPE.SELECT_BOARD，执行default",()=>{

//         expect(selectedBoard("react",{ type:"aaa",  board:"react" }))
//             .toBe("react");
//     });

//     test("action.type是ACTION_TYPE.SELECT_BOARD，返回了正确的state",()=>{

//         expect(selectedBoard("html",{ type:ACTION_TYPE.SELECT_BOARD,  board:"react" }))
//             .toBe("react");
//     });
// });


// describe("测试函数errorMessage：",()=>{
//     test("action.type不是ACTION_TYPE.FETCH_BOARD_FAILURE，执行default",()=>{
//         expect(errorMessage("没有错误",{ type:"aaa",  board:"react", errorMessage:"网络连接错误" }))
//             .toBe("没有错误");
//     });

//     test("action.type是ACTION_TYPE.FETCH_BOARD_FAILURE，返回了正确的state",()=>{
//         expect(errorMessage("没有错误",{ type:ACTION_TYPE.FETCH_BOARD_FAILURE,  board:"react", errorMessage:"网络连接错误" }))
//             .toBe("网络连接错误");
//     });
// });



describe("测试函数boards：",()=>{

    const boards2={
        html:{   
            isFetching:false,            
            isFromServer:false,         
            lastUpdate:1439478605547,   
            posts:[                     
                {id: 77,title: '零基础学习HTML'},   
                {id: 78,title: 'HTML完全参考手册'},
                {id: 79,title: 'HTML5专业编程'},
            ],
        },
    };
    const boards3={
        html:{   
            isFetching:false,           
            isFromServer:false,         
            lastUpdate:1439478605547,   
            posts:[                     
                {id: 77,title: '零基础学习HTML'},   
                {id: 78,title: 'HTML完全参考手册'},
                {id: 79,title: 'HTML5专业编程'},
            ],
        },
        react:{      
            isFetching:false,           
            isFromServer:false,           
            lastUpdate:14394784056847,   
            posts:[                     
                {id: 121,title: 'react入门经典'},
                {id: 122,title: 'react高级编程'},
                {id: 123,title: 'react真实案例解析'},
            ],  
        },
    };


    test("action.type不是ACTION_TYPE.REFRESH_BOARD、FETCH_BOARD_REQUEST、FETCH_BOARD_SUCCESS时，执行default (1)",()=>{
        expect(boards({},{ type:"aaa", board:"html" }))
            .toEqual({});
    });
    test("action.type不是ACTION_TYPE.REFRESH_BOARD、FETCH_BOARD_REQUEST、FETCH_BOARD_SUCCESS时，执行default (2)",()=>{
        expect(boards(boards2,{ type:"aaa", board:"html" }))
            .toEqual(boards2);
    });


    test("action.type是ACTION_TYPE.REFRESH_BOARD时 ",()=>{
        expect(boards(boards3,{ type:ACTION_TYPE.REFRESH_BOARD,  board:"react" }))
            .toEqual({
                html:{   
                    isFetching:false,           
                    isFromServer:false,         
                    lastUpdate:1439478605547,   
                    posts:[                     
                        {id: 77,title: '零基础学习HTML'},   
                        {id: 78,title: 'HTML完全参考手册'},
                        {id: 79,title: 'HTML5专业编程'},
                    ],
                },
                react:{      
                    isFetching:false,           
                    isFromServer:true,             // 区别在这一项
                    lastUpdate:14394784056847,   
                    posts:[                     
                        {id: 121,title: 'react入门经典'},
                        {id: 122,title: 'react高级编程'},
                        {id: 123,title: 'react真实案例解析'},
                    ],  
                },
            });
    });

    
    test("action.type是ACTION_TYPE.FETCH_BOARD_REQUEST (1) (初次获取此子版块的数据) ",()=>{
        expect(boards({},{ type:ACTION_TYPE.FETCH_BOARD_REQUEST,  board:"html" }))
            .toEqual({
                html:{   
                    isFetching:true,            
                    isFromServer:true,         
                    lastUpdate:undefined,   
                    posts:[],
                },
            });
    });
    test("action.type是ACTION_TYPE.FETCH_BOARD_REQUEST (2) (已经获取过此子版块数据，refresh的之后) ",()=>{
        expect(boards(boards3,{ type:ACTION_TYPE.FETCH_BOARD_REQUEST,  board:"react" }))
            .toEqual({
                html:{   
                    isFetching:false,           
                    isFromServer:false,         
                    lastUpdate:1439478605547,   
                    posts:[                     
                        {id: 77,title: '零基础学习HTML'},   
                        {id: 78,title: 'HTML完全参考手册'},
                        {id: 79,title: 'HTML5专业编程'},
                    ],
                },
                react:{      
                    isFetching:true,       // 区别在这一项    
                    isFromServer:false,             
                    lastUpdate:14394784056847,   
                    posts:[                     
                        {id: 121,title: 'react入门经典'},
                        {id: 122,title: 'react高级编程'},
                        {id: 123,title: 'react真实案例解析'},
                    ],  
                },
            });
    });


    const postsJson=[                     
        {id: 77,title: '零基础学习HTML'},   
        {id: 78,title: 'HTML完全参考手册'},
        {id: 79,title: 'HTML5专业编程'},
    ];
    const time=Date.now();
    test("action.type是ACTION_TYPE.FETCH_BOARD_SUCCESS (1) (初次获取此子版块的数据) ",()=>{
        expect(boards({
            html:{   
                isFetching:true,            
                isFromServer:true,         
                lastUpdate:undefined,   
                posts:[],
            },
        },{ type:ACTION_TYPE.FETCH_BOARD_SUCCESS,  board:"html", receivedAt:time, posts:postsJson }))
            .toEqual({
                html:{   
                    isFetching:false,            
                    isFromServer:false,         
                    lastUpdate:time,   
                    posts:postsJson,
                },
            });
    });
    test("action.type是ACTION_TYPE.FETCH_BOARD_SUCCESS (2) (重新获取此子版块的数据) ",()=>{
        expect(boards({
            html:{   
                isFetching:true,            
                isFromServer:true,         
                lastUpdate:time,   
                posts:postsJson,
            },
        },{ type:ACTION_TYPE.FETCH_BOARD_SUCCESS,  board:"html", receivedAt:time, posts:postsJson }))
            .toEqual({
                html:{   
                    isFetching:false,            
                    isFromServer:false,         
                    lastUpdate:time,   
                    posts:postsJson,
                },
            });
    });


    
});

