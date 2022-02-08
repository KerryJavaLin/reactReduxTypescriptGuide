

import React from "react"
import { JsxElement } from "typescript";



interface PropsSelect{
    selectedBoard:string;
    options:string[];
    onChange:any;
}
//export function Select( {selectedBoard,options,onChange}:PropsSelect ){
export class Select extends React.Component<PropsSelect>{
    theDiv:any="";

    handleChange = (e:any)=>{
        this.theDiv.innerText=e.target.value;
    }

    render(): React.ReactNode {
        const {selectedBoard,options,onChange}=this.props;
        return <div>
            <select value={selectedBoard} onChange={onChange}>
            { options.map((option)=>{
                return <option key={option} value={option}> {option} </option>
            }) }
            </select> 

            <button>按钮1</button>
            <textarea rows={3} cols={20} defaultValue="在w3school，你可以找到你所需要的所有的网站建设教程。" /> 
            <input type="checkbox" value="复选框1" />
            <input type="checkbox" value="复选框2" />

            <hr/>


            <input type="text" defaultValue="请输入关键字" onChange={this.handleChange}  />
            <div ref={ (node)=>this.theDiv=node }>...</div>

        </div>
    }
    

}







