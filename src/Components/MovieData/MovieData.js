import React, { useCallback, useEffect, useState } from 'react';
import classes from './MovieData.module.css';
import AddNewMovie from './AddNewMovie'

const MovieData = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
   

   

    const cancelHandler=()=>{
        setIsLoading(false)
    }

    async function addMovieHander(movie){
    //   console.log(movie)
 const response=  await fetch('https://react-http-834f8-default-rtdb.firebaseio.com/movies.json',{
        method:'POST',
        body:JSON.stringify(movie),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await response.json();
    console.log(data)
}

  async function deleteMovieHandler(id){
    const response= await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/movies/${id}.json`,{
       method:'DELETE'
           })

           setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  }

   

    const fetchMovieHandler = useCallback(async (retryCount = 0) => {
        let MAX_RETRY_COUNT=5
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('https://react-http-834f8-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            const loadedMovies=[];

            for(const key in data){
                loadedMovies.push({
                    id:key,
                    title:data[key].title,
                    openingText:data[key].openingText,
                    releaseDate:data[key].releaseDate
                })
            }
    
          
            setMovies(loadedMovies);
            setIsLoading(false);
        } catch (error) {
            console.error('Error occurred during fetch:', error.message);
            setError(error.message);
           
            // if (retryCount < MAX_RETRY_COUNT) {
            //     setTimeout(() => {
            //         fetchMovieHandler(retryCount + 1); // Retry with incremented retry count
            //     }, 5000); // Retry after 5 seconds
            // }
            
        }
        setIsLoading(false);
    }, []);
    
    useEffect(()=>{
        fetchMovieHandler()
    },[fetchMovieHandler])

   
    return (
        <>
         <AddNewMovie onAddMovie={addMovieHander}/>
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
                            <button onClick={()=>deleteMovieHandler(movie.id)}>Delete Movie</button>
                        </div>
                    ))}
                    {!isLoading && movies.length===0 && !error && <p>Found no Movies...</p>}
                    {!isLoading && error && <p>{error}</p>}
                    {isLoading && <p>Loading...</p>}
                  
                </div>

                <button onClick={cancelHandler}>Cancel</button>
            
        </div>
       
        </>
    );
}

export default MovieData;