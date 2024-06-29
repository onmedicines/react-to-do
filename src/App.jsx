import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";
import Heading from "./components/Heading";
import Item from "./components/Item";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function updateInput(event) {
    let { value } = event.target;
    setInput(value);
  }
  function updateList(event) {
    setList((prev) => {
      return [...prev, [input, false]];
    });

    event.preventDefault();
  }

  function strike(id) {
    let newList = list.map((item, index) => {
      if (index === id) return [item[0], !item[1]];
      else return [...item];
    });

    setList(newList);
  }
  function remove(id) {
    let newList = list.filter((item, index) => {
      return index !== id;
    });
    setList(newList);
  }

  return (
    <div id="App">
      <div id="wrapper">
        <Heading className="heading"></Heading>
        <form action="submit" onSubmit={updateList}>
          <Input type="text" onChange={updateInput} value={input}></Input>
          <Button type="submit">+</Button>
        </form>
        <div className="list">
          <ul>
            {list.map((item, index) => {
              return <Item key={index} id={index} strike={strike} item={item}></Item>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
