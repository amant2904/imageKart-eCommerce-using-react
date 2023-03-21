import React, { useState } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import classes from "./Movies.module.css"
import loader from "../../Assets/loader.png"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAPI_handler = async () => {
        setIsLoading(true)
        try {
            setError(null)
            setMovies([])
            const res = await fetch("https://swapi.dev/api/film");
            if (!res.ok) {
                throw new Error("something went wrong");
            }
            const data = await res.json();
            let fetchedMovies = await data.results.map((movie) => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    director: movie.director,
                    movieText: movie.opening_crawl
                }
            })
            setMovies(fetchedMovies);
        }
        catch (err) {
            setError(err);
        }
        setIsLoading(false);
    }

    let errorAndLoader = <Container className={`d-flex align-items-center justify-content-center ${classes.loader}`}>
        <h3>No Movies Found</h3>
    </Container>

    if (isLoading) {
        errorAndLoader = <Container className={`d-flex align-items-center justify-content-center ${classes.loader}`}>
            <img src={loader} alt="loader" />
        </Container>
    }

    if (error) {
        errorAndLoader = <Container className={`d-flex align-items-center justify-content-center ${classes.loader}`}>
            <h3>{error.message}</h3>
        </Container>
    }

    return (
        <Container className={`${classes.mainCont}`}>
            <Container className={`${classes.btnCont} p-4 my-4 d-flex align-items-center justify-content-center`}>
                <Button className={`${classes.fetchBtn}`} onClick={fetchAPI_handler}>Fetch Movies</Button>
            </Container>
            {errorAndLoader}
            {movies.map((movie) => {
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
