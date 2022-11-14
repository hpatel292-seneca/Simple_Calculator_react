import React from "react";
import "./Keys.css";

function Key(props) {
  return (
    <button
      onClick={() => {
        props.onChange(props.value);
      }}
    >
      {props.value}
    </button>
  );
}

export default Key;
