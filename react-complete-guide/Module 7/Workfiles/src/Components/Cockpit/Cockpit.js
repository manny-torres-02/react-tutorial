import React from 'react';

import classes from'./Cockpit.css'

const cockpit= (props) => {

    const assignedClasses = [];
    if ( props.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    } 

    return(
        <div>
        <h1>Hi, I am a react App</h1>
        <p className={assignedClasses.join('')}> This is working </p>
        <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
        </div>
    
    );
};

export default cockpit