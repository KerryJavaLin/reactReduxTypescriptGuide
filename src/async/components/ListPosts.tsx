

import React from "redux"

import { ItemPost, PropsItemPost } from "./ItemPost"

interface PropsListPosts{
    posts:PropsItemPost[];
}
export function ListPosts({posts}:PropsListPosts){

    return <div>
        { posts.map((post)=>{
            return <ItemPost key={post.id}  {...post} />;
        }) }
    </div>;
}






