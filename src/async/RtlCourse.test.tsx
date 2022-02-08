
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Select } from './components/Select';


// React：React Testing Library（RTL）教程       https://www.cnblogs.com/testopsfeng/p/14265218.html
// RTL是Enzyme的替代品
// Kent C. Dodds的React Testing Library (RTL)是Airbnb的Enzyme的替代品。Enzyme为测试React组件提供了很多实用的工具而RTL则是后退一步并提出疑问：
// 『怎么样的测试可以让我们对开发的React组件充满信心？』，相较于测试组件的内部实现细节，RTL把开发者当成一位React程序的终端用户
// 在这篇React Testing Library教程，我们将会学习怎么对React组件进行有信心的单元测试及集成测试。


// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------
// ****** 如果是通过create-react-app来创建项目，则Jest及RTL已经 默认安装 了，在package.json可以看到test script，我们可以通过npm test来运行测试。
// React初学者可能会对React体系的测试工具感到迷惑。RTL和Jest不是非此即彼，而是相互依赖并且都有自己的专属功能。
// 在现代的React中，Jest是最热门的JavaScript程序的测试框架，我们不可避免要去接触。


// describe('测试套件A', () => {        // describe块是测试套件（test suite）,一个测试套件可以包含多个测试用例，但是一个测试用例不能包含测试套件。
//     test('test01', () => {              // test块是测试用例（test case），其中test关键字也可以写成it。
//                 // 写在测试用例内部的是断言（assertions）（例如：Jest的expect），断言结果可以是成功，可以是失败，
//     });
// });

// describe("测试套件A",()=>{              
//     test("test01",()=>{    
//         expect(true).toBe(true);            // OK 断言成功    
//     });
//     test("test02",()=>{
//         // expect(true).toBe(false);        // error 断言失败
//         expect(false).toBe(false);          // OK 断言成功
//     });
     
// });

// 当你把上面的代码复制到一个test.js文件中，并且运行npm test命令，Jest会自动找到上述代码并执行。
// 当我们执行npm test时，Jest测试运行器默认会自动匹配所有test.js结尾的文件，你可以通过Jest配置文件来配置匹配规则和其他功能。
// 在运行所有测试后，你能看到测试用例变为绿色，Jest提供了交互式命令，让我们可以进一步下达命令。一般而言，Jest会一次性显示所有的测试结果（对于你的测试用例）。
// 如果你修改了文件（不管源代码还是测试代码），Jest都会重新运行所有的测试用例。


// function sum(a:number, b:number){
//     return a+b;
// }
// describe("测试sum函数",()=>{
//     test("看是否返回了正确的结果",()=>{
//         expect(sum(1,3)).toBe(45);
//         expect(sum(1,3)).toBe(4);
//     });
// });

// 简而言之，这就是Jest，与任何React组件无关。Jest 就是一个通过命令行来提供运行测试的能力的测试运行器。
// 虽然它还提供如『测试套件、测试用例、断言』等函数，以及其他更加强大的功能，但是本质上上述就是我们需要Jest的原因。
// 与Jest相比，RTL是一个测试React组件的测试库。另一个热门的测试库是之前提到的Enzyme。下面我们会学习使用RTL来测试React组件。



// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// 在这个章节，你会学习到怎么通过RTL渲染React组件。

// // export function Select( {selectedBoard,options,onChange}:PropsSelect ){
// describe("测试<Select />",()=>{
//     test("test1",()=>{
//         // RTL的render函数通过JSX去渲染内容，然后你就能在测试代码中访问你的组件，
//         render(<Select  selectedBoard="vue"  options={["html","react","vue"]}  onChange={()=>{console.log("哈哈哈")}} />); 

//         screen.debug();     // 通过RTL的screen.debug函数，可以确保看到渲染的内容：
//     });

// });

// 运行npm test后，在控制台能够看到Select组件的HTML输出。当你通过RTL编写测试代码时，都可以先通过screen.debug函数查看组件在RTL中的渲染结果。这样可以更高效的编写代码。

// console.log
// <body>
//     <div>
//     <select>
//         <option value="html">html</option>
//         <option value="react">react</option>
//         <option value="vue">vue</option>
//     </select>
//     </div>
// </body>

// RTL的厉害之处在于，它不关心实际的组件代码。我们接下来看一下利用了不同特性（useState、event handler，props）和概念（controlled component）的React组件：
// RTL能够让你的 React组件与呈现给人看的时候类似，看到的是React组件渲染成HTML，所以你会看到HTML结构的输出，而不是两个独立的React组件。
// ****** 此处省略具体的代码



// RTL：定位元素  --------------------------------------------------------------------------------------------------------
// 在渲染了React组件后，RTL提供了不同的函数去定位元素。定位后的元素可用于『断言』或者是『用户交互』。现在我们先来学习，怎么去定位元素：
// 当你不清楚RTL的render函数会渲染出什么时，请保持使用RTL的screen.debug函数。当你知道渲染的HTML的结构后，
// 你才能够通过RTL的screen.getByText等函数进行定位。定位后的元素可用于用户交互或断言

// describe("测试<Select />",()=>{
//     test("test1",()=>{
//         // RTL的render函数通过JSX去渲染内容，然后你就能在测试代码中访问你的组件，
//         render(<Select  selectedBoard="vue"  options={["html","react","vue"]}  onChange={()=>{console.log("哈哈哈")}} />); 
//         screen.debug();     // 通过RTL的screen.debug函数，可以确保看到渲染的内容：


//         // expect(screen.getByText("react")).toBeInTheDocument();  // OK 检查元素是否在DOM中的断言
//         // expect(screen.getByText("reac")).toBeInTheDocument();   // error


//         // 当找不到元素，getByText函数会抛出一个异常。少数人利用这个特性去使用诸如getByText的定位函数作为隐式的断言，通过该函数替代通过expect进行的显式的断言。
//         // screen.getByText('react');      // OK  隐式断言，推荐使用显式断言。
//         // screen.getByText('reac');       // error 抛出一个异常


//         // expect(screen.getByText("reac")).toBeInTheDocument();   // error  getByText的参数为string，精确匹配。
//         expect(screen.getByText(/reac/)).toBeInTheDocument();   // OK   getByText的参数为正则表达式，部分匹配（模糊匹配）。

//     });
// });



// RTL： 定位类型  --------------------------------------------------------------------------------------------------------

// console.log
// <body>
//     <div><div>
//         <select>
//             <option value="html">html</option>
//             <option value="react">react</option>
//             <optionvalue="vue">vue</option>
//         </select>
//         <button>按钮1</button>
//         <textarea cols="20" rows="3">在w3school，你可以找到你所需要的所有的网站建设教程。</textarea>
//         <input type="checkbox" value="复选框1"/>
//         <input type="checkbox" value="复选框2"/>
//     </div></div>
// </body>

// describe("测试<Select />",()=>{
//     test("test1",()=>{
//         render(<Select  selectedBoard="vue"  options={["html","react","vue"]}  onChange={()=>{console.log("哈哈哈")}} />); 
//         screen.debug();      

//         //screen.getByRole('');
//         expect(screen.getByRole('textbox')).toBeInTheDocument();
//         expect(screen.getByRole('button')).toBeInTheDocument();
//         expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();
        
//     });
// });


// Here are the accessible roles:
// combobox:
// Name "":
// <select />
// --------------------------------------------------
// option:
// Name "html":
// <option value="html"/>
// Name "react":
// <option value="react"/>
// Name "vue":
// <option value="vue"/>
// --------------------------------------------------
// button:
// Name "按钮1":
// <button />
// --------------------------------------------------
// textbox:
// Name "":
// <textarea cols="20" rows="3"/>
// --------------------------------------------------
// checkbox:
// Name "":
// <input type="checkbox" value="复选框1"/>
// Name "":
// <input type="checkbox" value="复选框2"/>
// --------------------------------------------------


// *********  还未完全搞妥 ***************************

// 还有其他更特定元素的查询类型：
// getByText
// getByRole
// getByLabelText       LabelText           <label for="search" />
// getByPlaceholderText PlaceholderText     <input placeholder="Search" />
// getByAltText         AltText             <img alt="profile" />
// getByDisplayValue    DisplayValue        <input value="JavaScript" />
// getByTestId


// RTL：定位的变异种类（VARIANTS）  --------------------------------------------------------------------------------------------------------

// queryBy 拥有以下的定位类型：
// queryByText
// queryByRole
// queryByLabelText
// queryByPlaceholderText
// queryByAltText
// queryByDisplayValue
// queryByTestId


// findBy 则拥有以下定位类型：
// findByText
// findByRole
// findByLabelText
// findByPlaceholderText
// findByAltText
// findByDisplayValue
// findByTestId


// getBy 和 queryBy 有什么不同？ --------------------------------
// 现在面临一个问题：什么时候使用 getBy，什么时候使用其他两个变种 queryBy 和 findBy。你已经知道 getBy 在无法定位元素时，会抛出一个异常。
// 这是一个便利的副作用，因为这可以让开发者更早地注意到测试代码中发生了某些错误。但是，这也会导致在断言时一些不应该发生的异常：

// describe("无名字测试集",()=>{
//     test("测试1",()=>{
//         render(<MyCom />);

//         screen.debug();

//         // expect(screen.getByText(/要搜索/)).toBeInTheDocument();     // 测试通过
//         // expect(screen.getByText(/林生俊/)).toBeInTheDocument();     // 测试失败

//         // // 断言失败，因为 getBy 在当前HTML中找不到文本"林生俊" ，所以 getBy 在我们进行断言之前抛出了一个异常。
//         // // 为了验证某个元素不在页面中，我们改用 queryBy 来替代 getBy：
//         // expect(screen.getByText(/林生俊/)).toBeNull();     // 测试失败，**** 因为进行断言之前抛出了一个异常

//         // *******  当你想要验证一个元素 不在 页面中，使用 queryBy ，否则使用 getBy。
//         expect(screen.queryByText(/林生俊/)).toBeNull();    // 测试通过


//     });
// });


// 什么时候使用 findBy --------------------------------
// findBy 变体用于那些最终会显示在页面当中的异步元素，我们创建一个新的 React 组件来说明该场景：






// 如果是多个元素怎么办 --------------------------------







// 断言函数 --------------------------------






// RTL：Fire Event 启动事件、触发事件 --------------------------------------------------------------------------------------------------------
// 目前为止，我们只学习了通过getBy（或 queryBy）测试React组件的元素渲染，以及拥有条件渲染元素的React组件的再渲染。
// 但是实际的用户交互是怎么样的呢？当用户想input输入文字，组件可能会再渲染（例如我们的例子），或者一个新的值会被显示（或者被使用在任何地方）。
// 我们可以通过RTL的fireEvent函数去模拟终端用户的交互。下面我们学习一下：

describe("测试<Select />",()=>{
    test("test1",()=>{
        render(<Select  selectedBoard="vue"  options={["html","react","vue"]}  onChange={()=>{console.log("哈哈哈")}} />); 
        screen.debug();      

        //screen.getByRole('');
        // console.log(screen.getAllByRole('textbox')[1]);
        
        //expect((screen.getAllByRole('textbox')[1] as any).value).toBe("请输入关键字");
        // expect((screen.getAllByRole('textbox')[1] as any).value).toBe("请输入关键字2222222");


        //expect(screen.getAllByRole('textbox')[1]).toBeInTheDocument();    // OK
        // expect(screen.getAllByRole('textbox')[2]).toBeInTheDocument();   // error
        fireEvent.change(       // fireEvent 函数去模拟终端用户的交互。
            screen.getAllByRole('textbox')[1], 
            { target: { value: 'JavaScript' }, }
        );
        //expect( (screen.getAllByRole('textbox')[1] as any).value ).toBe("JavaScript");  // ok
        expect( (screen.getAllByRole('textbox')[1] as any).value ).toBe("JavaScript22222");  // error



    });
});












// RTL：用户事件（User Event）  --------------------------------------------------------------------------------------------------------























// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
























// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------














// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------














// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------














// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------












// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------












// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------









// Jest 和 React Testing Library  --------------------------------------------------------------------------------------------------------












































