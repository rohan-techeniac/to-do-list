import React from "react";
import { useState } from "react";
import "./Todo.css";

function UpdateInput(props) {
  const { element, updateHandler, setShowUpdateBox } = props;
  const [input, setInput] = useState(element.title);
  return (
    <div className="item">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="updateinput"
        value={input}
      />
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
}

export default UpdateInput;
