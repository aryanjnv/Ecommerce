import React, { useCallback, useEffect, useState } from 'react';
import classes from './MovieData.module.css';

const MovieData = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

    const cancelHandler=()=>{
        setIsLoading(false)
    }

   

    const fetchMovieHandler = useCallback(async (retryCount = 0) => {
        let MAX_RETRY_COUNT=5
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('https://swapi.dev/api/film/');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
    
            const transformedMovies = data.results.map(movieData => ({
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_date
            }));
    
            setMovies(transformedMovies);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            if (retryCount < MAX_RETRY_COUNT) { // Define MAX_RETRY_COUNT as per your requirement
                setTimeout(() => {
                    fetchMovieHandler(retryCount + 1); // Retry with incremented retry count
                }, 5000); // Retry after 5 seconds
            }
        }
    }, []);
    
    useEffect(()=>{
        fetchMovieHandler()
    },[fetchMovieHandler])

   
    return (
        <div>
            <button className={classes.button} onClick={fetchMovieHandler}>Fetch Movie</button>

          
                <div className={classes.maindiv}>
                    { !isLoading && movies.length>0 && movies.map((movie, index) => (
                        <div className={classes.item} key={index}>
                            <div className={classes.innerdiv}>
                              <h3 className={classes.place}>{movie.title}</h3>
                            <h5 className={classes.date}>Release Date:{movie.releaseDate}</h5>
                            </div>
                          
                            <td className={classes.city}>{movie.openingText}</td><br/>
                            <td><button>BUY TICKETS</button></td>
                        </div>
                    ))}
                    {!isLoading && movies.length===0 && !error && <p>Found no Movies...</p>}
                    {!isLoading && error && <p>{error}</p>}
                    {isLoading && <p>Loading...</p>}
                </div>

                <button onClick={cancelHandler}>Cancel</button>
            
        </div>
    );
}

export default MovieData;
