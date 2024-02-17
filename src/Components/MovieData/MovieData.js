import React, { useState } from 'react';
import classes from './MovieData.module.css';

const MovieData = () => {
    const [movies, setMovies] = useState([]);

    async function fetchMovieHandler() {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();

            const transformedMovies = data.results.map(movieData => ({
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_date
            }));

            setMovies(transformedMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    return (
        <div>
            <button className={classes.button} onClick={fetchMovieHandler}>Fetch Movie</button>

          
                <div className={classes.maindiv}>
                    {movies.map((movie, index) => (
                        <div className={classes.item} key={index}>
                            <div className={classes.innerdiv}>
                              <h3 className={classes.place}>{movie.title}</h3>
                            <h5 className={classes.date}>Release Date:{movie.releaseDate}</h5>
                            </div>
                          
                            <td className={classes.city}>{movie.openingText}</td><br/>
                            <td><button>BUY TICKETS</button></td>
                        </div>
                    ))}
                </div>
            
        </div>
    );
}

export default MovieData;