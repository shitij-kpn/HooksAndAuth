import React, { createContext, ReactChild, useContext, useMemo, useReducer } from 'react';

interface Action{
  type:string;
  payload:Item;
}

interface Item{
  id:number;
  title:string;
  description:string;
}

interface props{
  children:ReactChild;
}


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


//@ts-expect-error
export const TodoContext = createContext();

export const TodoProvider = ({ children }:props) => {

  let initialState:Item[] = [];
  try {
    const todoItems = localStorage.getItem('todo');
    initialState = todoItems!= null ? JSON.parse(todoItems) : [];
  }catch{
    console.log("cannot fetch local storage");
  }

  const [store,dispatch] = useReducer(Reducer,initialState);

  const contextValue = useMemo(()=>{
    return [store,dispatch];
  },[store,dispatch]);
  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export default function useTodoContext(){
  return useContext(TodoContext)
}