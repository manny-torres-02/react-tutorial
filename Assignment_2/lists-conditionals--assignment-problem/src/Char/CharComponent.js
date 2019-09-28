import React from 'react';

//props - arbitray parameter
const charComponent =(props) => {

    const style = {
        display: 'inline-block',
        padding: '20px',
        textAlign: 'center',
        margin:'16px',
        border: '1px solid black'
    }
    return (
//insert the component here 
//this will take the style and apply it to validation
        <div style={style} onClick = {props.clicked}>
            {props.character}
        </div>
    );
};

export default charComponent;