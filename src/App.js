import {useEffect, useState}from 'react';

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com?apikey=13b2af4f'



const App = () =>{
    const [movies, setMovies] =useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => { //async means it takes time to fetch said data
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Spiderman')
    },[]);

    return(
        <div className='app'>
            <h1>Movies For the Doodies</h1>
            <div className='search'>
                <input 
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange ={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {movies?.length >0
                ? (
                    <div className='container'>
                        {movies.map((movie) =>(
                            <MovieCard movie ={ movie } />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies found</h2>
                    </div>
                )
            }

            
            

        </div>
    );
}

export default  App;