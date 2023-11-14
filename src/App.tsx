import React from "react";
import "./App.css";
import { Button, Avatar } from "inline";

function App() {
  return (
    <div className="App flex flex-col gap-8 p-8">
      <div className="flex gap-3">
        <Button id="button" label="button" />
        <Button id="btn" color="blue">
          Button
        </Button>
        <Button id="btn" color="blue">
          Button
        </Button>
        <Button id="btn" color="blue">
          Button
        </Button>
        <Button id="btn" color="blue">
          Button
        </Button>
        <Button id="btn" color="blue">
          Button
        </Button>
      </div>
      <Avatar
        color="purple"
        id="avatar"
        image="https://images.pexels.com/photos/191340/pexels-photo-191340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="default"
        status={{
          value: "active",
        }}
      />
    </div>
  );
}

export default App;
