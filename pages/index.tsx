import ListItem from "components/ListItem"
import Header from "components/Header"
import Footer from "components/Footer"
import InputNewTask from "components/InputNewTask"
import useTodoContext from "context/useTodoContext"

interface Item{
    id:number;
    title:string;
    description:string;
}

// interface RawData{
//     userId:number;
//     id:number;
//     title:string;
//     body:string;
// }


export default function Home(){
    const [Todo] = useTodoContext();
    return (
        <>
        <Header/>
        <InputNewTask/>
        <main className="flex flex-wrap min-h-62">
            {Todo ? 
                Todo.map((todo:Item) => <ListItem key={todo.id} title={todo.title} description={todo.description}/>)
                : "Loading"
            }
        </main>
        <Footer/>
        </>
    )
}


