

// import * as React from 'react'
import React,{useState} from "react"


// 对于React的Hooks和classes组件，React Testing Library都工作得很好。无论您如何编写组件，您的测试都将是相同的。  



interface PropsShowMessage{
    children:React.ReactNode | React.ReactNode[];
    //children:React.ReactElement | React.ReactElement[];  // error 文本不是React.ReactElement
}
export function ShowMessage(props:PropsShowMessage){
    const [isShow,setIsShow]=useState(true);

    return <div>
        显示或隐藏：
        <input type="checkbox" checked={isShow} onChange={(e)=>{setIsShow(e.target.checked)}}  />
        { isShow?props.children:null }
    </div>;
}










