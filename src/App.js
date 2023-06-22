import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);

  const eventHandler = (event) => {
    setInput(event.target.value);
  };
  const listOfItems = () => {
    setItemList((oldItem) => {
      return [...oldItem, input];
    });
    setInput("");
  };
  // const [dltItem, setdltItem] = useState("");
  const deleteItems = (id) => {
    console.log("item deleted");

    setItemList((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1 className="heading">ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={eventHandler}
        />
        <button className="add" onClick={listOfItems}>
          +
        </button>

        <ol>
          {/* <li> {input}</li> */}
          {itemList.map((itemName, index) => {
            return (
              <TodoList
                id={index}
                key={index}
                text={itemName}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
