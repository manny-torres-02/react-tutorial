import React, {useEffect} from 'react';

import classes from'./Cockpit.css'

const cockpit= (props) => {

    useEffect(() => {
      console.log('[cockpit.js] useEffect');
      //HTTP Request 
        setTimeout(() => {
        alert('saved Data to Cloud!');
      }, 1000) ;
    
    return () => {
    
      console.log('[Cockpit.js] cleanUpWork in useEffect');
    };
    }, 
    []);

  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanUpWork in 2nd useEffect');
    };
  },
  []);

    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass=classes.red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    } 

    return(
        <div className = {classes.cockpit}>
        <h1> {props.title}</h1>
        <p className={assignedClasses.join('')}> This is working or is it
         </p>
        <button
        className={btnClass}
        onClick={props.clicked}>Toggle Person</button>
        </div>
    
    );
};

export default React.memo(cockpit);