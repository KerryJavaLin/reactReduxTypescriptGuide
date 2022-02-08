

import React from 'react';



// 类型定义
// 01、React.FC<Props> | React.FunctionComponent<Props>     // 表示 函数组件 的类型
// 02、React.Component<Props, State>                        // 表示 类组件 的类型
// 03、React.ComponentType<Props>                           // 表示 联合类型(React.FC | React.Component)，用于高阶组件中。
// 04、React.ComponentProps<typeof XXX>                     // 获取指定组件xxx的Props

// 05、React.ReactElement | JSX.Element                     // 表示 类组件 的类型
// 06、React.ReactNode                                      // 表示 类组件 的类型
// 07、React.CSSProperties                                  // 表示 类组件 的类型
// 08、React.HTMLProps<HTMLXXXElement>                      // 表示 类组件 的类型
// 09、React.ReactEventHandler<HTMLXXXElement>              // 表示 类组件 的类型
// 10、React.XXXEvent<HTMLXXXElement>                       // 表示 类组件 的类型


interface Props{
    name:string;
    age:number;
}
interface State{
    counter:number;
}


// ------------------------------------------------------------------------------------------------------------------------------
// 01、React.FC<Props> | React.FunctionComponent<Props>     表示 函数组件 的类型

// function MyComponent(props:Props):JSX.Element{
//     return <div>表示 函数组件 的类型</div>;
// }
// let fc1:(props:Props)=>JSX.Element = MyComponent;    //  fc1: (props:Props)=>JSX.Element

// const MyComponent = (props:Props):JSX.Element=>{            // MyComponent: (props: Props) => JSX.Element
//     return <div>表示 函数组件 的类型</div>;
// };

// const MyComponent:(props: Props) => JSX.Element = (props:Props):JSX.Element => {
//     return <div>{props.name}---{props.age}</div>;
// };

// const MyComponent:(props: Props) => JSX.Element = (props:Props):JSX.Element => {
//     return <div>{props.name}---{props.age}</div>;
// };

// // const MyComponent:React.FC<Props> = (props:Props):JSX.Element => {
// const MyComponent:React.FunctionComponent<Props> = (props:Props):JSX.Element => {
//     return <div>{props.name}---{props.age}</div>;
// };
// -------------------------------------------------------------------------
// const MyComponent:React.FunctionComponent<Props> = (props)=>{
//     return <div>
//         {props.name}---{props.age}
//     </div>;
// };
// function MyComponent(props:Props){
//     return <div>
//         {props.name}---{props.age}
//     </div>;
// }

 
// ------------------------------------------------------------------------------------------------------------------------------
// 02、React.Component<Props, State>    表示 类组件 的类型

// class MyComponent extends React.Component<Props,State>{

//     render(): React.ReactNode {
//         const { name,age }=this.props;
//         return <div>
//             {name}--{age}
//         </div>;
//     }
// }


 
// ------------------------------------------------------------------------------------------------------------------------------
// 03、React.ComponentType<Props>    还没搞懂 还没搞懂 还没搞懂 还没搞懂 还没搞懂 

// ------------------------------------------------------------------------------------------------------------------------------
// 04、React.ComponentProps<typeof XXX>    还没搞懂 还没搞懂 还没搞懂 还没搞懂 还没搞懂 








// ------------------------------------------------------------------------------------------------------------------------------
// 05、React.ReactElement | JSX.Element  表示原生DOM组件实例(如<div />)，或用户定义的复合组件实例(如<MyComponent />)  

// class MyComponent extends React.Component<Props,State>{

//     render(): React.ReactNode {
//         const { name,age }=this.props;
//         return <div>
//             {name}--{age}
//         </div>;
//     }
// }
// let div1:JSX.Element = <div>aaa</div>;                          // 表示 原生DOM组件实例
// let div2:React.ReactElement = <div>aaa</div>;
// let Com1:JSX.Element = <MyComponent name="Lin" age={22}/>;      // 表示用户定义的 复合组件实例(MyComponent组件实例)
// let Com2:React.ReactElement = <MyComponent name="Lin" age={22}/>;
// console.log(typeof Com1);   // "object"
// console.log(Com1);    



// ------------------------------------------------------------------------------------------------------------------------------
// 06、React.ReactNode
// 类型表示任何可能的  React节点类型(基本上是ReactElement(包括Fragments和Portals) +  原始JS类型)  

// const elementOrPrimitive: React.ReactNode = 'string' || 0 || false || null || undefined || <div /> || <MyComponent />;
// const Component = ({ children: React.ReactNode }) => ...

// class MyComponent extends React.Component<Props,State>{

//     render(): React.ReactNode {
//         const { name,age }=this.props;
//         return <div>
//             {name}--{age}
//         </div>;
//     }
// }
// const Com1:React.ReactNode=<div></div>;  // 原生DOM组件类型 实例
// const Com2:React.ReactNode=MyComponent;  // 自定义的组件类型
// const Com3:React.ReactNode=<MyComponent name="Lin" age={22}/>   // 自定义的组件类型 实例
// const node1:React.ReactNode="aaaaa";    // 居然还表示原始类型
// const node2:React.ReactNode=22;
// const node3:React.ReactNode=false;
// const node4:React.ReactNode=null;
// const node5:React.ReactNode=undefined;


// ------------------------------------------------------------------------------------------------------------------------------
// 07、React.CSSProperties  在JSX中表示 样式对象 的类型，用于css-in-js样式。

// const style:React.CSSProperties={ color:"red",backgroundColor:"blue" }; // 定义一个样式对象，style的类型为React.CSSProperties
// class MyComponent extends React.Component<Props,State>{

//     render(): React.ReactNode {
//         const { name,age }=this.props;

//         return <div style={style}>      {/* // 使用样式对象style */}
//             {name}--{age}
//         </div>;
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------
// 08、React.HTMLProps<HTMLXXXElement>  表示指定HTML元素的 属性 的类型，用于扩展HTML元素  

class MyComponent extends React.Component<Props,State>{

    render(): React.ReactNode {
        const { name,age }=this.props;

        return <div >       
            {name}--{age}
        </div>;
    }
}


// const Input: React.FC<Props & React.HTMLProps<HTMLInputElement>> = props => { ... }

// <Input about={...} accept={...} alt={...} ... />


// ------------------------------------------------------------------------------------------------------------------------------
// 09、React.ReactEventHandler<HTMLXXXElement>








// ------------------------------------------------------------------------------------------------------------------------------
// 10、React.XXXEvent<HTMLXXXElement> 










export { MyComponent }

