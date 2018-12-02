import React from 'react';

import './Next.css';

const next = (props) => (
    <button className="Button" onClick={props.clicked}>
        Next
    </button>
);

export default next;