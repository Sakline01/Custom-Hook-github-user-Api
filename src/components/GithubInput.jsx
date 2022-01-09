import React, { useState } from "react";

const Input = ({ onTaskCreate }) => {
  const [text, setText] = useState("");
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      onTaskCreate(text);
    } else {
      alert("Please fillup the Title and Description form");
    }
  };
  return (
    <form action="submit">
      <input
        type="text"
        value={text}
        onChange={handleOnchange}
        placeholder="Write username"
        style={{ marginTop: "10px" }}
      />
      <input type="submit" onClick={handleClick} value="+" />
    </form>
  );
};

export default Input;
