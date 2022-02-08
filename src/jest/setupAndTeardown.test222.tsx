

// Setup and Teardown 安装和拆卸 ----------------------------------------------------------------------------------------------------------------
// 通常，在编写测试时，您需要在测试运行之前进行一些设置工作，并且需要在测试运行之后进行一些完成工作。 Jest提供了帮助函数来处理这个问题。  



// Repeating Setup For Many Tests  重复设置许多测试 ----------------------------------------------------------------------------------------------------------------
// 如果您需要为许多测试重复做一些工作，您可以使用 beforeEach 和 afterEach 。  

// let arr:string[]=[];
// beforeEach(()=>{        // 在文件内的每个test之前调用
//     arr.push("Lin");
//     arr.push("Guo");
//     arr.push("Xia");
// });
// afterEach(()=>{         // 在文件内的每个test之后调用
//     arr=[];
// });
// test("111",()=>{
//     expect(arr).toContain("Lin");
// });
// test("222",()=>{
//     expect(arr).toContain("Xia");
// });


// beforeEach和afterEach可以用与测试处理异步代码相同的方式处理异步代码——它们可以接受done参数，也可以返回promise。 
// 例如，如果initializeCityDatabase()返回了一个在数据库初始化时解析的承诺，我们将希望返回该承诺:  

// beforeEach(() => {
//     return initializeCityDatabase();
// });


// One-Time Setup  一次性设置 ----------------------------------------------------------------------------------------------------------------
// 在某些情况下，您只需要在文件的开头进行一次设置。 当设置为异步时，这可能特别麻烦，所以不能内联执行。 Jest提供了beforeAll和afterAll来处理这种情况。  
// 例如，如果initializeCityDatabase和clearCityDatabase都返回承诺，并且城市数据库可以在测试之间重用，我们可以将测试代码更改为:  

// beforeAll(() => {                    // 文件内的所有测试之前
//     return initializeCityDatabase();
// });
  
// afterAll(() => {                     // 文件内的所有测试之后
//     return clearCityDatabase();
// });
  
// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// });
  
// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// });



// Scoping  范围 ----------------------------------------------------------------------------------------------------------------
// 默认情况下，beforeAll和afterAll块应用于文件中的每个测试。 
// 还可以使用描述块将测试分组在一起。 当它们位于描述块中时，beforeAll和afterAll块只应用于该描述块中的测试。  
// 例如，假设我们不仅有一个城市数据库，还有一个食物数据库。 我们可以为不同的测试做不同的设置:  

// beforeEach(() => {  // 这个beforeEach应用于本文件中的所有测试 
//     return initializeCityDatabase();
// });
  
// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// });
  
// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// });
  
// describe('matching cities to foods', () => {
//     beforeEach(() => {  // 这个beforeEach仅仅应用于本describe(描述块)中的所有测试 
//       return initializeFoodDatabase();
//     });
  
//     test('Vienna <3 veal', () => {
//       expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//     });
  
//     test('San Juan <3 plantains', () => {
//       expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//     });
// });

// 注意顶级beforeEach在describe块中的beforeEach之前执行。 它可以帮助说明所有钩子的执行顺序。 
// ***************** 还未搞妥



// Order of execution of describe and test blocks  描述块和测试块的执行顺序   ----------------------------------------------------------------------------------------------------------------
// Jest在执行任何实际测试之前，会在测试文件中执行所有描述处理程序。 这是在before* 和 after* 而不是在描述块内部进行设置和拆卸的另一个原因。 
// 一旦描述块完成，在默认情况下，Jest将按照收集阶段遇到的顺序连续运行所有测试，等待每个测试完成并清理后再继续。  
// 考虑以下示例测试文件和输出:  

// describe('outer', () => {
//     console.log('describe outer-a');
  
//     describe('describe inner 1', () => {
//         console.log('describe inner 1');
//         test('test 1', () => {
//             console.log('test for describe inner 1');
//             expect(true).toEqual(true);
//         });
//     });
  
//     console.log('describe outer-b');
  
//     test('test 1', () => {
//         console.log('test for describe outer');
//         expect(true).toEqual(true);
//     });
  
//     describe('describe inner 2', () => {
//         console.log('describe inner 2');
//         test('test for describe inner 2', () => {
//             console.log('test for describe inner 2');
//             expect(false).toEqual(false);
//         });
//     });
  
//     console.log('describe outer-c');
// });
  
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2



// General Advice  一般性建议 ----------------------------------------------------------------------------------------------------------------
// 如果测试失败了，首先要检查的事情之一应该是，当测试是唯一运行的测试时，测试是否失败了。 
// 要使用Jest只运行一个测试，请临时将该test命令更改为test.only:  

test.only("测试1",()=>{         // test.only 只运行这个测试，别的测试全部忽略。
    expect(true).toBe(true);
});

test("测试2",()=>{              // 这个测试skipped
    expect("AA").toBe("AA");        
});
     
// 如果您有一个测试，当它作为一个更大的套件的一部分运行时经常失败，但当您单独运行它时却没有失败，那么很可能是来自不同测试的东西干扰了这个测试。 
// 通常可以通过使用beforeEach清除某些共享状态来修复这个问题。 如果不确定是否修改了某些共享状态，还可以尝试记录数据的beforeEach


// 'usingMatchers.test.tsx'不能在'——isolatedModules'下编译，因为它被认为是一个全局脚本文件。添加import、export或空的'export{}'语句使其成为模块。  
export {}


