

// --------------------------------------------------------------------------------------------------------------
// Jest使用“匹配器”让您以不同的方式测试值。 本文档将介绍一些常用的匹配器。 
// 所有的匹配器完整列表,见expect API文档:  https://www.jestjs.cn/docs/expect

// expect(value)
// expect.extend(matchers)
// expect.anything()
// expect.any(constructor)
// expect.arrayContaining(array)
// expect.assertions(number)
// expect.hasAssertions()
// expect.not.arrayContaining(array)
// expect.not.objectContaining(object)
// expect.not.stringContaining(string)
// expect.not.stringMatching(string | regexp)
// expect.objectContaining(object)
// expect.stringContaining(string)
// expect.stringMatching(string | regexp)
// expect.addSnapshotSerializer(serializer)
// .not
// .resolves
// .rejects
// .toBe(value)
// .toHaveBeenCalled()
// .toHaveBeenCalledTimes(number)
// .toHaveBeenCalledWith(arg1, arg2, ...)
// .toHaveBeenLastCalledWith(arg1, arg2, ...)
// .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
// .toHaveReturned()
// .toHaveReturnedTimes(number)
// .toHaveReturnedWith(value)
// .toHaveLastReturnedWith(value)
// .toHaveNthReturnedWith(nthCall, value)
// .toHaveLength(number)
// .toHaveProperty(keyPath, value?)
// .toBeCloseTo(number, numDigits?)
// .toBeDefined()
// .toBeFalsy()
// .toBeGreaterThan(number | bigint)
// .toBeGreaterThanOrEqual(number | bigint)
// .toBeLessThan(number | bigint)
// .toBeLessThanOrEqual(number | bigint)
// .toBeInstanceOf(Class)
// .toBeNull()
// .toBeTruthy()
// .toBeUndefined()
// .toBeNaN()
// .toContain(item)
// .toContainEqual(item)
// .toEqual(value)
// .toMatch(regexp | string)
// .toMatchObject(object)
// .toMatchSnapshot(propertyMatchers?, hint?)
// .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
// .toStrictEqual(value)
// .toThrow(error?)
// .toThrowErrorMatchingSnapshot(hint?)
// .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)
// --------------------------------------------------------------------------------------------------------------






// --------------------------------------------------------------------------------------------------------------
// 一般的匹配器：toBe(value)  not.toBe(value)      toEqual(value)  not.toEqual(value)

// // 测试一个值最简单的方法是用完全相等。  
// test("2加2等于4：",()=>{
//     expect(2+2).toBe(4);    // expect(2+2)返回一个"期望对象",再用调用"期望对象"的匹配器tobe(4)。当Jest运行时，它会跟踪所有失败的匹配器，以便为您打印良好的错误消息。  
// });

// test("2加2等于4：",()=>{
//     expect(2+2).toEqual(4);    // 用toEqual也OK
// });


// // toBe使用Object.is来测试完全相等。测试对象时候，用toEqual，递归地检查对象或数组的每个字段。
// test("测试对象的'相等性'：",()=>{
//     const obj={a:11};
//     obj["b"]=22;
//     // expect(obj).toBe({a:11,b:22});    // 测试不通过，obj对象的值为{a:11,b:22}，但obj和{a:11,b:22}是两个不同的对象，不是完全相等的。
//     // expect(obj).toEqual({a:11,b:22});   // 通过 

//     const obj1={name:"Lin",age:33};
//     const obj2=obj1;
//     expect(obj1).toBe(obj2);    // OK  obj1和obj2是同一个对象
// });


// // not.toBe是toBe的反义词
// test("2个正数相加不等于0：",()=>{
//     for(let i=1;i<10;++i){
//         for(let j=1;j<10;++j){
//             expect(i+j).not.toBe(0);   
//         }
//     }
// });


// // not.toEqual是toEqual的反义词
// test("测试对象的'相等性'：",()=>{
//     const obj={a:11};
//     obj["b"]=22;
//     expect(obj).not.toEqual({a:11,b:33});   // 通过 
// });


// --------------------------------------------------------------------------------------------------------------
// Truthiness匹配器 
// 在测试中，有时需要区分undefined、null和false，但有时不希望区别对待它们。 Jest包含一些助手，可以让您明确地说明自己想要什么。  

// toBeNull()         只匹配 null
// toBeUndefined()    只匹配 undefined
// toBeDefined()      toBeUndefined的反义词
// toBeTruthy()       匹配真值
// toBeFalsy()        匹配假值


// test("测试null：",()=>{
//     const n=null;
//     expect(n).toBe(null);           // n是null
//     expect(n).toEqual(null);        // OK
//     expect(n).toBeNull();           // n是null
//     expect(n).not.toBeUndefined();  // n不是未定义
//     expect(n).toBeDefined();        // n已定义
//     expect(n).not.toBeTruthy();     // n不是真值
//     expect(n).toBeFalsy();          // n是假值
// });


// test("测试0：",()=>{
//     const zero=0;
//     expect(zero).not.toBeNull();
//     expect(zero).not.toBeUndefined();
//     expect(zero).toBeDefined();
//     expect(zero).not.toBeTruthy();
//     expect(zero).toBeFalsy();
// });



// --------------------------------------------------------------------------------------------------------------
// Numbers匹配器 ：大多数比较数字的方法都有对应的匹配器。  

// test("测试 2加2：", () => {
//     const value=2+2;
//     expect(value).toBeGreaterThan(3);           // 大于
//     expect(value).toBeGreaterThanOrEqual(3.5);  // 大于等于
//     expect(value).toBeLessThan(5);              // 小于
//     expect(value).toBeLessThanOrEqual(4.5);     // 小于等于

//     // 对于数字来说，toBe和toEqual是等效的。
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });


// 浮点数不能用toBe，以为浮点数有精度的误差。要用toBeCloseTo(是接近于的意思) 

// test("测试浮点数：",()=>{
//     const value=0.1+0.2;
//     //expect(value).toBe(0.3);        // 测试不通过
//     expect(value).toBeCloseTo(0.3);   // OK
// });


// --------------------------------------------------------------------------------------------------------------
// Strings匹配器：用toMatch来检查字符串和正则表达式:  

// test('测试字符串 是否匹配', () => {
//     expect('team').toMatch("team");  // OK 测试字符串  这里也可以用toBe
// });

// test('测试字符串 是否匹配', () => {
//     expect('team').toMatch("team2");    // 测试不通过，不匹配。
// });


// test('team中没有I', () => {
//     expect('team').not.toMatch(/I/);     // 测试 正则表达式
// });
  
// test('Christoph中有stop', () => {
//     expect('Christoph').toMatch(/stop/);
// });



// // --------------------------------------------------------------------------------------------------------------
// // Arrays and iterables 匹配器   你可以使用toContain来检查数组或可迭代对象是否包含特定的项:  

// const shoppingList = ['diapers','kleenex','trash bags','paper towels','milk',];
  
// test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(new Set(shoppingList)).toContain('milk');
// });


// // --------------------------------------------------------------------------------------------------------------
// // Exceptions 匹配器    如果您想测试某个特定函数在调用时是否抛出错误，请使用toThrow。  
// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
// }
// test('compiling android goes as expected', () => {
//     expect(() => compileAndroidCode()).toThrow();
//     expect(() => compileAndroidCode()).toThrow(Error);
  
//     // You can also use the exact error message or a regexp
//     // 抛出异常的函数需要在包装函数中调用，否则toThrow断言将失败。 
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK2');     // 未通过
//     expect(() => compileAndroidCode()).toThrow(/JDK/); 
// });


// // --------------------------------------------------------------------------------------------------------------
// // And More     And More    And More    And More    And More    https://www.jestjs.cn/docs/expect




// 'usingMatchers.test.tsx'不能在'——isolatedModules'下编译，因为它被认为是一个全局脚本文件。添加import、export或空的'export{}'语句使其成为模块。  
export {}

