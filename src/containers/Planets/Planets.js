import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import Next from '../../components/Next/Next';
import './Planets.css';

class Blog extends Component {
    state = {
        post: {},
        id: 1,
        error: false,
        films_length: 0
    }

   
   
    componentDidMount () {
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
                // console.log(error);
                this.setState({error: true});
            });
    }


    postSelectedHandler = (id) => {
        id = this.state.id
        id++
        if ( id > 61) id = 1
        this.setState({id: id});
        this.componentDidMount();
    }

    
    render () {
        let id = this.state.id
        let films_length = this.state.films_length
        let post = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            post = this.state.post;
        }
        console.log(this.state.id)

        
        return (
            <div className="Planets">
                <section className="Posts">
                    <Post 
                    key={id} 
                    title={post.name} 
                    population={post.population}
                    climate={post.climate}
                    terrain={post.terrain}
                    films={films_length}
                     />
                </section>
                <Next clicked={() => this.postSelectedHandler(id)} />

            </div>
        );
    }
}

export default Blog;