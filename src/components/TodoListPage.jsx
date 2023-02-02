import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./TodoListPage.css";

function TodoListPage() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you wish to delete this To do?")) {
      const newArray = todos.filter((todo) => todo.id !== id);
      setTodos(newArray);
    }
  };

  const statusHandler = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newArray);
  };

  const LogoutHandler = () => {
    sessionStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="Container">
        <div className="headercontainer">
          <div className="title">To Do's </div>{" "}
          <button onClick={LogoutHandler} className="logoutbutton">
            {" "}
            Logout{" "}
          </button>
        </div>
        <AddTodo setTodos={setTodos} todos={todos} />
        <Todo
          todos={todos}
          deleteEntry={deleteTodo}
          statusChange={statusHandler}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default TodoListPage;
