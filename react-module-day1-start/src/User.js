import React from "react";

function User(props) {
    const nameLength = props.nombre.length;

    if (nameLength > 5) {
        return <h2>Nombre largo: {props.nombre} tu nombre tiene {nameLength} caracteres! tu edad es: {props.edad}</h2>;
    }   else {
        return <h2>Nombre corto: {props.nombre} tu nombre tiene {nameLength} caracteres! tu edad es: {props.edad}</h2>;

    }

    // return <h2>Hello guys from the User component</h2>;
}

// don't forget to export the component so you can import it somewhere else
export default User;