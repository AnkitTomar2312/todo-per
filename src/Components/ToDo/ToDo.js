import React, { useState } from "react";
import "./Todo.css";
const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const handelAdd = () => {
    if (!inputData) {
      return;
    }
    setItems([...items, inputData]);
    setInputData("");
  };
  const handelDel = (index) => {
    const newData = items.filter((element, id) => {
      return id !== index;
    });
    setItems(newData);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="heading">
            <h1>To-Do..</h1>
          </div>

          <div className="task-adder">
            <input
              type="text"
              placeholder=""
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button onClick={handelAdd}>+</button>
          </div>
          <div className="show-items">
            <div className="each-item">
              {items.map((element, index) => {
                return (
                  <div className="item-inside">
                    <h3 key={index}>{element}</h3>
                    <button
                      onClick={() => {
                        handelDel(index);
                      }}
                    >
                      -
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
