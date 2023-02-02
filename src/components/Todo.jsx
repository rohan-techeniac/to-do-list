import { useState } from "react";
import "./Todo.css";
import UpdateInput from "./UpdateInput";

function Todo(props) {
  const { todos, deleteEntry, statusChange, setTodos } = props;
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [updateID, setUpdateID] = useState();

  const updateHandler = (id, text) => {
    if (text === "") {
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

  return todos.map((element, index) => {
    if (element.id === updateID && showUpdateBox === true) {
      return (
        <UpdateInput
          key={index}
          element={element}
          updateHandler={updateHandler}
          setShowUpdateBox={setShowUpdateBox}
        />
      );
    } else {
      return (
        <div key={index} className="item">
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
    // return <div key={index}>{displayEditMenu(element, index)}</div>;
  });
}

export default Todo;
