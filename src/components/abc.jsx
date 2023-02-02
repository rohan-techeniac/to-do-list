import { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const { todos, deleteEntry, statusChange, setTodos } = props;
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [updateID, setUpdateID] = useState();
  const [input, setInput] = useState("");

  const updateHandler = (id, text) => {
    if (text.length === 0) {
      alert("The input is empty.");
    } else {
      const newArray = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: text };
        }
        return todo;
      });
      setTodos(newArray);
      setShowUpdateBox(false);
    }
  };

  const displayEditMenu = (element, index) => {
    if (element.id === updateID && showUpdateBox === true) {
      return (
        <div className="item">
          {/* <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="updateinput"
            value={input}
          /> */}
          <button
            onClick={() => {
              updateHandler(element.id, input);
              setInput("");
            }}
          >
            Update{" "}
          </button>
          <button
            onClick={() => {
              setShowUpdateBox(false);
            }}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div className="item">
          <div className={element.status ? "titleChecked" : "notChecked"}>
            {" "}
            <input
              type="checkbox"
              checked={element.status}
              onChange={() => statusChange(element.id)}
            />
            {element.title}{" "}
          </div>
          <div className="options">
            <button onClick={() => deleteEntry(element.id)}> Remove </button>{" "}
            <button
              onClick={() => {
                setUpdateID(element.id);
                setShowUpdateBox(true);
              }}
            >
              {" "}
              Edit{" "}
            </button>
          </div>
        </div>
      );
    }
  };

  return todos.map((element, index) => {
    return <div key={index}>{displayEditMenu(element, index)}</div>;
  });
}

export default Todo;
