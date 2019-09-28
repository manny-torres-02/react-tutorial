import React from "react";

const UserOutput = (props) => {

    return (
        <div className="UserOutput">
        <p> hi This is a user output component</p>
       <p> this is more output
           
        My username is: {props.name} </p>
    </div>
    )
} 

export default UserOutput ;