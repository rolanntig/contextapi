import React, { createContext, useState, useReducer } from 'react'
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();



const TodoListContextProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(todosReducer, [
      { text: "ururur", id: 1 },
      { text: "freddy", id: 2 },
      { text: "fazbear", id: 3 },
    ]);
    
  return (
      <TodoListContext.Provider value={{ todos, dispatch}}>
          {children}
        </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
