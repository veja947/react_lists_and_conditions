import React, {Component} from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.myClick}>I am {props.name}, and I am {props.age} years old!</h1>
            <p>{props.children}</p>
            <input onChange={props.editInput} value={props.name}/>
        </div>
    )
};

export default person;