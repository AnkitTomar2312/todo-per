import React, { useState } from "react";

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
          <figure>
            <img src="" alt="todo" />
            <figcaption>Add your tasks here</figcaption>
          </figure>
          <div className="">
            <input
              type="text"
              placeholder="Write text here"
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
                  <>
                    <h3 key={index}>{element}</h3>
                    <button
                      onClick={() => {
                        handelDel(index);
                      }}
                    >
                      -
                    </button>
                  </>
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
