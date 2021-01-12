// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const buttonText = { text: "Button on Click" };
  const labelName = "Enter Your Name:";
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelName}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
