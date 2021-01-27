import ListItem from "components/ListItem"
import Header from "components/Header"
import Footer from "components/Footer"
import InputNewTask from "components/InputNewTask"
import { useEffect, useReducer } from "react"

interface Item{
    id:number;
    title:string;
    description:string;
}

interface RawData{
    userId:number;
    id:number;
    title:string;
    body:string;
}

interface Action{
    type:string;
    payload:Item;
}

const inititalState:Item[] = [];

const Reducer = (state:Item[],action:Action):Item[] => {
    switch(action.type){
        case "FormSubmit": return [
            ...state,
            action.payload,
        ];
        //@ts-expect-error
        case "FetchData": return [...action.payload];
        default: return state;
    }
}

export default function Home(){
    const [Todo,dispatch] = useReducer(Reducer,inititalState);

    useEffect(()=>{
        async function getTodos(){
            const results = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await results.json();
            const filteredData = data.map((todo:RawData) => {
                return {
                    id: todo.id,
                    title: todo.title,
                    description: todo.body
                }
            })
            console.log(filteredData);
            dispatch({type:"FetchData",payload:filteredData})
        }
        getTodos()
    },[]);
    //ability to take new tasks
    return (
        <>
        <Header/>
        <InputNewTask/>
        <main className="flex flex-wrap">
            {Todo ? 
                Todo.map(todo => <ListItem key={todo.id} title={todo.title} description={todo.description} />)
                : "Loading"
            }
        </main>
        <Footer/>
        </>
    )
}


