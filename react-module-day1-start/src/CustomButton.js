import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
    return <button className="customButton">{props.text}</button>

    // return <h2>Hello guys from the User component</h2>;
}

// don't forget to export the component so you can import it somewhere else
export default CustomButton;