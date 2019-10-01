import React from 'react';
//import Radium from'radium'
/*get rid of radiumt that helps with styling in order to install*/
import './Person.css';
const person =(props) => {
 /*const style = {
     '@media (min-width:500px)':{ 
     width: "450px"
 }*/
const rnd =Math.random();

if (rnd>0.7) {
    throw new Error ('something went wrong')
}

return (
    <div className='Person' /*style={style}*/>
<h1 onClick = {props.click}>Hi, Im {props.name} AND i AM {props.age} years old </h1>
<h4>{props.children}</h4>
<input type="text" onChange={props.changed} value ={props.name}/>
</div>
) 
}
//Math.floor(Math.random()*30)

//export default Radium(person); 
export default person
 