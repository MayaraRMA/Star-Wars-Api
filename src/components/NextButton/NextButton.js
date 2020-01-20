import React from 'react';

import './NextButton.css';

const NextButton = (props) => (
    <button className="Button" onClick={props.clicked}>
        Next
    </button>
);

export default NextButton;