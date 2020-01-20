import React, { Component } from 'react';
import axios from '../../axios.js';

import DataPlanet from '../../components/DataPlanet/DataPlanet';
import NextButton from '../../components/NextButton/NextButton';
import './PlanetCard.css';

class PlanetCard extends Component {
    state = {
        post: {},
        id: 1,
        error: false,
        films_length: 0
    }

    componentDidMount () {
        this.postSelectedHandler();
    }


    postSelectedHandler = () => {
        let id = Math.round(Math.random() * (61 - 1) + 1);
        this.setState({id: id});
        this.getDataPlanet();
    }

    getDataPlanet = () => {
        axios.get( '/planets/' + this.state.id )
            .then( response => {
                const post = response.data;
                console.log( response );
                const films_length = post.films.length
                this.setState({
                    post: post,
                    films_length: films_length,
                });

                
            } )
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {
        let id = this.state.id
        let films_length = this.state.films_length
        let post = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            post = this.state.post;
        }

        
        return (
            <div className="Planets">
                <section className="Posts">
                    <DataPlanet 
                    key={id} 
                    title={post.name} 
                    population={post.population}
                    climate={post.climate}
                    terrain={post.terrain}
                    films={films_length}
                     />
                </section>
                <NextButton clicked={this.postSelectedHandler} />

            </div>
        );
    }
}

export default PlanetCard;