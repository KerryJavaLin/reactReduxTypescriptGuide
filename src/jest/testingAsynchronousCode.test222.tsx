

// --------------------------------------------------------------------------------------------------------------
// 在JavaScript中，代码异步运行是很常见的。当您有异步运行的代码时，Jest需要知道它正在测试的代码何时完成，然后才能进行另一个测试。Jest有几种处理方法。  


// Callbacks 最常见的异步模式是回调 --------------------------------------------------------------------------------------------------------------
// 假设您有一个fetchData(回调)函数，它获取一些数据并在完成时调用callback(data)。 你想要测试这个返回的数据是字符串'LinShengJun'。  
// 默认情况下，Jest测试在执行结束时就会完成。 这意味着这个测试不会像预期的那样工作:  



// test("",()=>{
//     expect(2+2).toBe(4);
// });

// function fetchData(callback:Function){
//     setTimeout(() => {
//         callback("LinShengJun");
//     }, 2000);
// }
// test('', () => {
//     function callback(data:string) {
//         expect(data).toBe('LinShengJun222');    // 这样也算通过了，出问题了，在调用回调之前，只要fetchData完成，测试就会完成。  
//     }
//     console.log(222);
//     fetchData(callback);
// });

// 有一种替代形式的测试可以解决这个问题。 不要将测试放在一个带有空参数的函数中，而是使用一个名为done的参数。 Jest将在测试完成之前等待done回调被调用。  
// 如果done()从未被调用，测试将失败(带有超时错误)，这正是您希望发生的情况。  
// 如果expect语句失败，它将抛出一个错误，并且不会调用done()。 如果我们想在测试日志中看到它失败的原因，我们必须将expect包装在一个try块中，
// 并将错误传递到done块中。 否则，我们将得到一个不透明的超时错误，它不会显示expect(data)接收到的值。  

// test('数据是LinShengJun', done => {
//     function callback(data:string) {
//         try {
//             // expect(data).toBe('LinShengJun');        // 测试通过
//             expect(data).toBe('LinShengJun2');          // 测试未通过
//             done();             // Jest将在测试完成之前等待done回调被调用。
//         } catch (error) {  
//             done(error);
//         }
//     }
//     fetchData(callback);
// });



// Promises --------------------------------------------------------------------------------------------------------------
// 如果您的代码使用Promises，则有一种更直接的方法来处理异步测试。从您的测试返回一个承诺，Jest将等待该承诺的解决。如果承诺被拒绝，测试将自动失败。  
// 例如，让我们说fetchData，而不是使用回调，返回一个承诺，应该解析为字符串'LinShengJun'。 我们可以用以下方法来测试它:  

// function fetchData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve("LinShengJun");
//         }, 2000);
//     });
// }
// test("数据是LinShengJun",()=>{
//     return fetchData().then(data=>{    // 须return，否则你的测试将在fetchData返回的promise解析之前完成，then()有机会执行callback。  
//         expect(data).toBe("LinShengJun");  
//         // expect(data).toBe("LinShengJun22");     // fetchData().then前须return，否则这个也能测试成功。
//     });
// });        

// // 如果您预期promise会被拒绝，请使用.catch方法。 确保添加预期。 断言来验证是否调用了一定数量的断言。 Otherwise, a fulfilled promise would not fail the test.
// ****************  还没完全搞妥





// Async/Await --------------------------------------------------------------------------------------------------------------













// 'usingMatchers.test.tsx'不能在'——isolatedModules'下编译，因为它被认为是一个全局脚本文件。添加import、export或空的'export{}'语句使其成为模块。  
export {}

