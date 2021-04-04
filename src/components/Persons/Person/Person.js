import React from 'react';
// import stlyed from 'styled-components'
// import Radium from 'radium';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I am a {props.name} and I am {props.age} year old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person