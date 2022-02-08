
import React from 'react';



// React：React Testing Library（RTL）教程       https://www.cnblogs.com/testopsfeng/p/14265218.html
// Kent C. Dodds的 React Testing Library (RTL) 是Airbnb的 Enzyme 的替代品。Enzyme 为测试 React 组件提供了很多实用的工具，而 React Testing Library（简称RTL）则是后退一步并提出疑问：
// 『怎么样的测试可以让我们对开发的 React 组件充满信心？』，相较于测试组件的内部实现细节，RTL把开发者当成一位 React 程序的终端用户
// 在这篇React Testing Library教程，我们将会学习怎么对 React 组件进行有信心的单元测试及集成测试



// RTL：渲染组件  --------------------------------------------------------------------------------------------------------

// const title="hello kerry java";
// function MyCom(){
//     return <div id="div1">{title}</div>;
// }


interface PropsSearch{
    value:string;
    children:React.ReactNode | React.ReactNode[];
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
function Search({value,children,onChange}:PropsSearch){
    return <div>
        {children}
        <input aria-label="aTextBox" type="text" value={value} onChange={onChange}  />
    </div>;
}
function MyCom(){
    const [searchText,setSearchText]=React.useState("");

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setSearchText(e.target.value);
    }

    return <div>
        <Search value={searchText} onChange={handleChange}  >请输入关键字：</Search>
        <div title="title属性">要搜索的关键字：{searchText?searchText:"..."}</div>
        <div aria-label="ariaLabelExample">aria-label属性</div>
        <button>点击我</button>
    </div>;
}





// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------
// RTL：渲染组件  --------------------------------------------------------------------------------------------------------



// function Search({ value, onChange, children }) {
//     return (<div>
//         <label htmlFor="search"> {children} </label>
//         <input id="search" type="text" value={value} onChange={onChange} />
//     </div>);
// }

// export function RtlCourse() {
//     const [search, setSearch] = React.useState('');
   
//     function handleChange(event) {
//         setSearch(event.target.value);
//     }
   
//     return (<div>
//         <Search value={search} onChange={handleChange}> 输入关键字: </Search>
//         <p>搜索 {search ? search : '...'}</p>
//     </div>);
// }
   








export { MyCom }
