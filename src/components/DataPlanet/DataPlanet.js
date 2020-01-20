import React from 'react';

import './DataPlanet.css';

function FilmsOrFilm(number) {
    if (number > 1) return ' films'
    return ' film'
}

const DataPlanet = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <p><span className='Data'>Population:</span> {props.population}</p>
            <p> <span className='Data'>Climate:</span> {props.climate}</p>
            <p><span className='Data'>Terrain: </span>{props.terrain}</p>
            <p><span className='Data'>Featured in</span> {props.films}
            <span className='Data'>{FilmsOrFilm(props.films)}</span> </p>
        </div>
    </article>
);

export default DataPlanet;