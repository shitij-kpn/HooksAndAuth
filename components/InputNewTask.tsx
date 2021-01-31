import useTodoContext from "context/useTodoContext"
import {  ChangeEvent, useState } from "react";

export default function InputNewTask(){
    
    const [,dispatch] = useTodoContext();
    
    const [todo,setTodo] = useState({
        id:Math.floor(Math.random()*100000),
        title:'',
        description:''
    });

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setTodo(todo => {
            return {
                ...todo,
                [name]:value,
            }
        })
    }

    const handleSubmit = () => {
        if(todo.title.length > 2 && todo.description.length > 10){
            dispatch({type:'FormSubmit',payload:todo});
            setTodo({
                id:Math.floor(Math.random()*100000),
                title:'',
                description:''
            })
        }
    }

    return(
        <>
            <div className="p-2 bg-fuchsia-400 dark:bg-gray-700 dark:text-gray-100">
                <input 
                    className="p-2 m-2 rounded caret-color focus:ring-2 focus:ring-fuchsia-50 dark:text-black" 
                    type="text" 
                    placeholder="title"
                    name="title"
                    value={todo.title}
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    className="p-2 m-2 rounded caret-color focus:ring-2 focus:ring-fuchsia-50 dark:text-black" 
                    type="text"
                    name="description" 
                    placeholder="Description"
                    value={todo.description}
                    onChange={(e) => handleChange(e)}
                />
                <button 
                    className=" border-4 p-2 border-white rounded-xl dark:text-gray-100 dark:hover:text-gray-900 hover:bg-white text-gray-700 focus:-translate-y-2"
                    onClick={() => handleSubmit()}
                >
                    Add new Task!!
                </button>
            </div>
        </>
    )
}