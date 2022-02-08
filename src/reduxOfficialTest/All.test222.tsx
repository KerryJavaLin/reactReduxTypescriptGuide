
// redux 官方教程 中的 编写测试  章节  https://doc.codingdict.com/redux/recipes/WritingTests/

import { caAddThing } from "./actions"




// 测试 Action Creators  ------------------------------------------------------------------------------------------------------------
// 在 Redux 中，action creators 是返回普通对象的函数，当我们测试 action creators 时，我们想要测试是否调用了正确的 action creator 以及是否返回了正确的 action。

describe("测试action创建函数",()=>{
    test("测试caAddThing",()=>{
        const thing="起床起床";
        const result={
            type:"ADD_THING",
            thing:thing,
        };

        // 测试caAddThing(thing) 是否返回了正确的action对象result
        expect(caAddThing(thing)).toEqual(result);  // expect中返回的值  与 目标值result 做对比
    });
});









// describe('actions', () => {
//     it('should create an action to add a todo', () => {
//       const text = 'Finish docs'
//       const expectedAction = {
//         type: types.ADD_TODO,
//         text
//       }
//       expect(actions.addTodo(text)).toEqual(expectedAction)
//     })
//   })



















