

import React from "redux"



export interface PropsItemPost{
    id:number;
    title:string;
}

export function ItemPost({id,title}:PropsItemPost){
    return <li>帖子ID：{id} &nbsp;&nbsp; 帖子标题：{title}</li>;
}





