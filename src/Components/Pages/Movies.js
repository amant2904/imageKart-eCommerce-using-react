import React, { useState } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import classes from "./Movies.module.css"

export default function Movies() {
    const [movies, setMovies] = useState([]);

    const fetchAPI_handler = async () => {
        try {
            const res = await fetch("https://swapi.dev/api/films");
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
            console.log("some error found :- " + err)
        }
    }

    return (
        <Container className={`${classes.mainCont}`}>
            <Container className={`${classes.btnCont} p-4 my-4 d-flex align-items-center justify-content-center`}>
                <Button className={`${classes.fetchBtn}`} onClick={fetchAPI_handler}>Fetch Movies</Button>
            </Container>
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
