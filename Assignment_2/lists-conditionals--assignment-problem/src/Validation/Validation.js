import React from 'react';

const validation = ( props) => {
    let validationMessage = "good";

    if (props.inputLength <= 5) {
        validationMessage = 'short';
    }
        return (
        <div>
            <p>{validationMessage}</p>
        </div>
        );
};

export default validation;