import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo('');
  };

  const handleRemove = (e) => {
    let id = e.target.id;
    dispatch({ type: "REMOVE_TODO", id });
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "120px",
        textAlign: "center",
      }}
      className="ui list"
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              className="item"
              id={todo.id}
              onClick={handleRemove}
              key={todo.id}
            >
              {todo.text}
            </div>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">Add Todo:</label>
        <input type="text" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <input type="submit" value="Submit" className="ui button primary" />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
