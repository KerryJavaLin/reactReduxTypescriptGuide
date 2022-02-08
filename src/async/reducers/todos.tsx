

interface FaceTodo{
    id:number;
    title:string;
    completed:boolean;
}
const stateInitial=[
    { id:1, title:"起床", completed:false },
];


// console.log(222,[].reduce( (maxId,currEle)=>{ return Math.max(maxId,currEle.id) },0 )+1);


export function todos(state:FaceTodo[]=[], action:any){
    switch (action.type){
        case "ADD_TODO":
            return [...state, {
                id: state.reduce( (maxId,currEle)=>Math.max(maxId,currEle.id) ,0 )+1,
                title:action.title,
                completed:false,
            } ];

        default:
            return state;

    }
}



