
import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { MyComponent, } from "./components/TypeDefinitions"
import { MyComponent } from "./components/ReactTypingPatterns"



export function App(){     // App(): JSX.Element

    return <div>
        {/* TypeDefinitions.tsx */}
        {/* <MyComponent name="林生俊" age={33} /> */}
        {/* {Com1} */}


        {/* ReactTypingPatterns.tsx */}
        {/* 1--------、函数组件  */}
        {/* <MyComponent label="aaa" count={22} style={{ color:"red",backgroundColor:"gray" }}
            onClick={(eleSpan:HTMLSpanElement,innerText:string)=>{ eleSpan.innerText=parseInt(innerText)+1+""; }}/> */}
        {/* 2--------、类组件 */}
        {/* <MyComponent label="计数器：" /> */}
        {/* 3--------、泛型组件 Generic Components */}
        {/* <MyComponent items={[{name:"aaa",age:11},{name:"bbb",age:22},{name:"ccc",age:33},]} /> */}
        {/* 4--------、Render Props  */}
        {/* <MyComponent /> */}
        {/* <MyComponent>{(state)=>{return <div>{state.name}</div>}}</MyComponent> */}
        <MyComponent render={(state)=>{return <div>鼠标坐标：({state.x},{state.y})</div>}}  />


        {/* <MyComponent label="计数器的值" count={0} onClick={ (span:HTMLSpanElement,spanText:string)=>{span.innerText=(parseInt(spanText)+1)+""} } /> */}
        {/* <MyComponent className='divMiddle' style={{color:"red",backgroundColor:"gray"}}>
            <div>wwwwww</div>
            <div>rrrrrr</div>
        </MyComponent> */}
        {/* <MyComponent label="计算器的值：" /> */}
        {/* <MyComponent label="计算器的值：" countInit={4} /> */}









        

        

    </div>;
}













