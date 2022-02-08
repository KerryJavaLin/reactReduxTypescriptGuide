

// Mock Functions ----------------------------------------------------------------------------------------------------------------









// Using a mock function ----------------------------------------------------------------------------------------------------------------
// 假设我们正在测试forEach函数的实现，该函数为提供的数组中的每一项调用回调函数。  

function forEach(arr:any[],callback:Function){
    for(let i=0;i<arr.length;++i){
        callback(arr[i]);
    }
}
// 要测试此函数，可以使用模拟函数，并检查模拟函数的状态，以确保按预期调用回调。  






// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);




// Mock Functions ----------------------------------------------------------------------------------------------------------------













// Mock Functions ----------------------------------------------------------------------------------------------------------------











// Mock Functions ----------------------------------------------------------------------------------------------------------------















// Mock Functions ----------------------------------------------------------------------------------------------------------------













// Mock Functions ----------------------------------------------------------------------------------------------------------------











// Mock Functions ----------------------------------------------------------------------------------------------------------------












// 'usingMatchers.test.tsx'不能在'——isolatedModules'下编译，因为它被认为是一个全局脚本文件。添加import、export或空的'export{}'语句使其成为模块。  
export {}


