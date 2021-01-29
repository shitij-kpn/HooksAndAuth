import React, { createContext, Dispatch, ReactChild, useContext, useReducer } from 'react';


interface Item{
  id:number;
  title:string;
  description:string;
}

interface props{
  children:ReactChild;
}

type Action = {type:'FormSubmit',payload:Item} | {type:"RemoveTodo",payload:string}

const Reducer = (state:Item[],action:Action):Item[] => {
  switch(action.type){
    case "FormSubmit": {
      const newState = [
        ...state,
        action.payload,
      ];
      localStorage.setItem('todo',JSON.stringify(newState));
      return newState;
    }
    case "RemoveTodo": {
      const title = action.payload;
      const newState = state.filter((item) => {
        return item.title !== title;
      });
      localStorage.setItem('todo',JSON.stringify(newState));
      return newState;
    }
    default: return state;
  }
}

let initialState:Item[] = [];

export const TodoContext = createContext<[Item[],Dispatch<Action>]>([initialState,() => null]);

export const TodoProvider = ({ children }:props) => {

  try {
    const todoItems = localStorage.getItem('todo');
    initialState = todoItems!= null ? JSON.parse(todoItems) : [];
  }catch{
    console.log("cannot fetch local storage");
  }

  const [store,dispatch] = useReducer(Reducer,initialState);

  return (
    <TodoContext.Provider value={[store,dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}

export default function useTodoContext(){
  return useContext(TodoContext)
}