

import React from 'react';
// import React, { Props } from 'react';
// import React, { Children, Props } from 'react';

const log=console.log;


// React - Typing Patterns
// 1、Function Components - FC
// - Counter Component
// - Spreading attributes in Component
// 2、Class Components
// - Class Counter Component
// - Class Component with default props
// 3、Generic Components
// - Generic List Component
// 4、Render Props
// - Name Provider Component
// - Mouse Provider Component
// 5、Higher-Order Components
// - HOC wrapping a component
// - HOC wrapping a component and injecting props
// - Nested HOC - wrapping a component, injecting props and connecting to redux 🌟
// 6、Redux Connected Components
// - Redux connected counter
// - Redux connected counter with own props
// - Redux connected counter with redux-thunk integration
// 7、Context
// ThemeContext
// ThemeProvider
// ThemeConsumer
// ThemeConsumer in class component
// Hooks
// - useState
// - useReducer
// - useContext





// 1、函数组件 Function Components - FC --------------------------------------------------------------------------------------------------- 

// interface Props{
//     label:string;
//     count:number;
//     style?:React.CSSProperties;     // CSS属性  调用MyComponent组件时候附带的属性：style={{color:"red",backgroundColor:"gray"}}
//     onClick:(span:HTMLSpanElement,spanText:string)=>void;
// }
// function MyComponent(props:Props){  
//     const { label,count,onClick,...rest }=props;    // 在组件中展开属性 rest: {......, style: {…}}
//     let eleSpan:HTMLSpanElement;

//     return <div>
//         {label}--<span ref={ (eleNode:HTMLSpanElement)=>eleSpan=eleNode } {...rest}>{count}</span> <br/>    

//         <button onClick={ ()=>onClick(eleSpan,eleSpan.innerText) }>点击我</button>
//         {/* <button onClick={ ()=>onClick.bind(null,eleSpan,eleSpan.innerText)() }>点击我</button> */}
//     </div>;
// }



// 2、类组件 Class Components --------------------------------------------------------------------------------------------------- 

// interface Props{
//     label:string;
// }
// interface State{
//     count:number;
// }
// class MyComponent extends React.Component<Props,State>{ 
//     static defaultProps={   // 默认属性：向this.props里面添加(插入)属性name和color ************************
//         name:"Lin",
//         color:"red",
//     };

//     constructor(props:Props){
//         super(props);
//         log(111,this.props);
//         this.state={count:0};
//         log(222,this.props);
//     }
//     handleClick = ()=>{
//         // eleSpan.innerText=parseInt(eleSpan.innerText)+1+"";
//         // this.setState({ count:parseInt(eleSpan.innerText)+1 });
//         this.setState({ count:this.state.count+1 });
//     }
    
//     render(): React.ReactNode {
//         const { label }=this.props;
//         let count=this.state.count;
//         let eleSpan:HTMLSpanElement;

//         return <div>
//             {/* {label}:<span ref={ (eleNode:HTMLSpanElement)=>{eleSpan=eleNode} }>{count}</span> <br/>
//             <button onClick={ ()=>{this.handleClick(eleSpan)} }>点击我</button> */}

//             { label }:{this.state.count} <br/>
//             <button onClick={ this.handleClick }>点击我</button>
//         </div>;
//     }

// }



// 3、泛型组件 Generic Components --------------------------------------------------------------------------------------------------- 
// 轻松创建类型化组件变体和重用公共逻辑  常用的用例是通用的列表组件  

// interface PropsItem{
//     name:string;
//     age:number;
// }
// interface Props<T>{
//     items:T[];

// }
// class Item extends React.Component<PropsItem,{}>{   // {}：state为空，也可以省略state，因为其内没有用到state
//     render(): React.ReactNode {
//         const { name,age }=this.props;
//         return <div>
//             {name}--{age}<br/>
//         </div>;
//     }
// }

// class MyComponent extends React.Component<Props<PropsItem>,{}>{
//     render(): React.ReactNode {
//         const { items }=this.props;
//         return <div>
//             { items.map(item=>{return <Item key={item.name} {...item} />}) }
//         </div>;
//     }
// }



// 4、Render Props   --------------------------------------------------------------------------------------------------- 

// - Name Provider Component   ---------------------
// 使用 children 作为 render prop  的简单组件。children是个函数，此函数返回React.ReactNode，此React.ReactNode作为要渲染的东西。

// interface Props{
//     children:(state:State)=>React.ReactNode;
// }
// interface State{
//     name:string;
// }
// class MyComponent extends React.Component<Props,State>{
//     state={name:"林生俊"};  // 定义实例属性

//     render(): React.ReactNode {
//         return this.props.children(this.state);  // <MyComponent>{(state)=>{return <div>{state.name}</div>}}</MyComponent>
//     }
// }



interface Props{
    render:(state:State)=>React.ReactNode;
}
interface State{
    readonly x:number;
    readonly y:number;
}
class MyComponent extends React.Component<Props,State>{
    readonly state:State={x:0,y:0};      // 定义实例属性

    handleMouseMove = (e:React.MouseEvent<HTMLDivElement>)=>{
        this.setState({x:e.clientX,y:e.clientY});  
    }
    
    render(): React.ReactNode {
        
        return <div style={{ width:"100%",height:"100vh",backgroundColor:"gray" }}  onMouseMove={this.handleMouseMove}>
            {/* <MyComponent render={(state)=>{return <div>鼠标坐标：({state.x},{state.y})</div>}}  /> */}
            {this.props.render(this.state)}
        </div>;
        
    }
}



// 5、Higher-Order Components --------------------------------------------------------------------------------------------------- 
// 高阶组件  https://react.docschina.org/docs/higher-order-components.html






























// 6、类组件 Class Components --------------------------------------------------------------------------------------------------- 









export { MyComponent }

