import React from "react";

const UserInput = (props) => {

    return (
        <div className="UserInput">
            <h1>DOPE BRO</h1>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default UserInput;