import React from "react";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import "./AddTodo.css";

function AddTodo(props) {
  const [input, setInput] = useState("");

  const { setTodos, todos } = props;
  const handleSubmit = (e) => {
    if (input.length === 0) {
      alert("The add input is empty.");
    } else {
      e.preventDefault();
      const date = new Date();
      const newTodos = [
        { title: input, createdAt: date, id: uuidv1(), status: false },
        ...todos,
      ];
      setInput("");
      setTodos(newTodos);
    }
  };

  return (
    <div className="newtask">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="taskinput"
        value={input}
      />
      <button onClick={handleSubmit} className="addbutton">
        {" "}
        Add{" "}
      </button>
    </div>
  );
}

export default AddTodo;
