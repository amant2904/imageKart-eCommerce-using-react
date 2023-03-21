import React, { useEffect, useState, useCallback } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import classes from "./Movies.module.css"
import loader from "../../Assets/loader.png"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const api_url = "https://swapi.dev/api/films";
    const fetchAPI_handler = useCallback(async () => {
        console.log("fetching");
        setIsLoading(true)
        setMovies([])
        try {
            setError(null)
            let res = await fetch(api_url)
            if (!res.ok) {
                throw new Error("Something Went Wrong ...Retrying");
            }
            const data = await res.json();
            let fetchedMovies = data.results.map((movie) => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    director: movie.director,
                    movieText: movie.opening_crawl
                }
            })
            setMovies(fetchedMovies);
            setIsLoading(false);
        }
        catch (err) {
            console.log("error found");
            setError(err);
        }
    }, [])

    useEffect(() => {
        fetchAPI_handler();
    }, [fetchAPI_handler])

    const stopFetching = () => {
        setIsLoading(false);
    }

    let errorAndLoader = <Container className={`d-flex align-items-center justify-content-center ${classes.loader}`}>
        <h3>No Movies Found</h3>
    </Container>

    if (!error && isLoading) {
        errorAndLoader = <Container className={`d-flex align-items-center justify-content-center ${classes.loader}`}>
            <img src={loader} alt="loader" />
        </Container>
    }
    else if (error && isLoading) {
        errorAndLoader = <Container className={`d-flex flex-column align-items-center justify-content-center ${classes.loader}`}>
            <h3>{error.message}</h3>
            <img src={loader} alt="loader" />
            <Button className='px-4 py-2' variant='danger' onClick={stopFetching}>Cancel</Button>
        </Container>
    }
    else if (error && !isLoading) {
        errorAndLoader = <Container className={`d-flex flex-column align-items-center justify-content-center ${classes.loader}`}>
            <h3>Something Went Wrong...</h3>
        </Container>
    }

    return (
        <Container className={`${classes.mainCont}`}>
            <Container className={`${classes.btnCont} p-4 my-4 d-flex align-items-center justify-content-center`}>
                <Button className={`${classes.fetchBtn}`} onClick={fetchAPI_handler}>Fetch Movies</Button>
            </Container>
            {movies.length === 0 && errorAndLoader}
            {movies.length > 0 && movies.map((movie) => {
                return <Container key={movie.id} className={classes.movieCont}>
                    <Row className={classes.movieTitle}>
                        <h2>{movie.title}</h2>
                    </Row>
                    <Row className={classes.movieDirector}>
                        <h3>By :- {movie.director}</h3>
                    </Row>
                    <Row className={classes.movieText}>
                        <p>{movie.movieText}</p>
                    </Row>
                </Container>
            })}
        </Container>
    )
}
