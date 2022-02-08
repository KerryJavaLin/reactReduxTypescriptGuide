
import { todos } from "./todos"

// export const stateInitial=[
//     { id:1, title:"起床", completed:false },
// ];

// export function todos(state=[], action:any){
//     switch (action.type){
//         case "ADD_TODO":
//             return [...state, {
//                 id: state.reduce( (maxId,currEle)=>Math.max(maxId,currEle.id) ,0 )+1,
//                 title:action.title,
//                 completed:false,
//             } ];

//         default:
//             return state;

//     }
// }

describe("测试reducer todos：",()=>{
    test("参数state为undefined时，参数state会使用默认值[]",()=>{

        expect(todos(  undefined, {type:"ADD_TODO",title:"起床"}  ))
            .toEqual([ {id:1,title:"起床", completed:false} ]);
    });

    test("action.type不是'ADD_TODO'时，原样返回参数state(也就是执行了switch里面的default)",()=>{

        expect(todos(  [{ id:1, title:"起床", completed:false }], {type:"ADD_TODO222",title:"刷牙"}  ))
            .toEqual( [{ id:1, title:"起床", completed:false }] );
    });


    test("action.type是'ADD_TODO'时，返回了正确的state(1)",()=>{

        expect(todos(  [], {type:"ADD_TODO",title:"起床"}  ))
            .toEqual([{ id:1, title:"起床", completed:false }]);
    });

    test("action.type是'ADD_TODO'时，返回了正确的state(2)",()=>{

        expect(todos(  [{ id:1, title:"起床", completed:false }], {type:"ADD_TODO",title:"刷牙"}  ))
            .toEqual([
                { id:1, title:"起床", completed:false },
                { id:2, title:"刷牙", completed:false }
            ]);
    });

});




  