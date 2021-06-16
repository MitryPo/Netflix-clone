import React, { useState, useEffect } from 'react'
import axios from '../axios'
import '../css/Row.css'
import YouTube from 'react-youtube'


const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }


    const handleClick = (movie) => {
        axios.get(
            `movie/${movie.id}/videos?api_key=46f647b23c20600432618a8ec5bd6b6f`
        )
            .then((url) => {
                setTrailerUrl(url.data.results[0]?.key)
            })
        return setTrailerUrl('')
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
