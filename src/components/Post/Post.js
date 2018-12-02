import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <p><span className='Data'>Population:</span> {props.population}</p>
            <p> <span className='Data'>Climate:</span> {props.climate}</p>
            <p><span className='Data'>Terrain: </span>{props.terrain}</p>
            <p><span className='Data'>Featured in</span> {props.films} <span className='Data'>films</span> </p>
        </div>
    </article>
);

export default post;