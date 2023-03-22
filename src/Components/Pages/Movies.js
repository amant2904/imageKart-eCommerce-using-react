import React, { useEffect, useState, useCallback } from 'react'
import { Container, Button, Row, Form } from 'react-bootstrap'
import classes from "./Movies.module.css"
import loader from "../../Assets/loader.png"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // state for movie adding form
    const [movieName, setMovieName] = useState("");
    const [movie_openingText, setMovieOpeningText] = useState("");
    const [movieDirector, setMovieDirector] = useState("");
    // ____________________________________

    const api_url = "https://movies-react-42dac-default-rtdb.firebaseio.com/film.json";

    const fetchAPI_handler = useCallback(async (e) => {
        console.log("fetching");
        setMovies([]);
        if (e) {
            setError(null);
        }
        try {
            setIsLoading(true);
            let res = await fetch(api_url);
            if (!res.ok) {
                throw new Error("Something Went Wrong...Retrying");
            }
            const data = await res.json();
            let loadedMovies = [];
            for (let key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].name,
                    director: data[key].director,
                    movieText: data[key].opening_text
                })
            }
            setMovies(loadedMovies);
            setIsLoading(false);
            setError(null);
        }
        catch (err) {
            setError(err);
        }
    }, [])

    useEffect(() => {
        let keepFetching;
        if (error && isLoading) {
            keepFetching = setInterval(() => {
                fetchAPI_handler();
            }, 5000)
        }

        return () => clearInterval(keepFetching)
    }, [error, isLoading, fetchAPI_handler])

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

    // manually adding and deleting movie 
    const movieName_handler = (e) => {
        setMovieName(e.target.value);
    }

    const movie_openingText_handler = (e) => {
        setMovieOpeningText(e.target.value);
    }

    const movieDirector_handler = (e) => {
        setMovieDirector(e.target.value);
    }

    const movieSubmit_handler = async (e) => {
        e.preventDefault();
        let newMovieObj = {
            name: movieName,
            director: movieDirector,
            opening_text: movie_openingText
        }
        let res = await fetch(api_url, {
            method: 'POST',
            body: JSON.stringify(newMovieObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            await fetchAPI_handler();
            // alert("Movie Added Successfully");
        }
    }

    const deleteMovie_handler = async (e) => {
        const movie_id = e.target.parentElement.parentElement.lastElementChild.textContent;
        let res = await fetch("https://movies-react-42dac-default-rtdb.firebaseio.com/film/" + movie_id + ".json", {
            method: "DELETE"
        })
        if (res.ok) {
            await fetchAPI_handler();
            // alert("Deleted Successfully");
        }
    }
    // _____________________________________

    return (
        <Container className={`${classes.mainCont}`}>
            <Container className={`${classes.formCont} p-4 my-4`}>
                <Form onSubmit={movieSubmit_handler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Movie Name" value={movieName} onChange={movieName_handler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Opening Text</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Opening Text Here" value={movie_openingText} onChange={movie_openingText_handler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Director Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Director Name" value={movieDirector} onChange={movieDirector_handler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={classes.formSubmit_btn}>
                        Set Movie
                    </Button>
                </Form>
            </Container>

            <Container className={`${classes.btnCont} p-4 my-4 d-flex align-items-center justify-content-center`}>
                <Button className={`${classes.fetchBtn}`} onClick={fetchAPI_handler} id="fetchBtn">Fetch Movies</Button>
            </Container>

            {movies.length === 0 && errorAndLoader}
            {movies.length > 0 && movies.map((movie) => {
                return <Container key={movie.id} className={classes.movieCont}>
                    <Row className={classes.movieTitle}>
                        <h2>{movie.title}</h2>
                    </Row>
                    <Row className={`${classes.movieDirector} justify-content-between align-items-center`}>
                        <h3 className='w-auto'>By :- {movie.director}</h3>
                        <Button variant='danger' className='btn-sm w-auto mx-3' onClick={deleteMovie_handler}>Delete</Button>
                    </Row>
                    <Row className={classes.movieText}>
                        <p>{movie.movieText}</p>
                    </Row>
                    <p hidden>{movie.id}</p>
                </Container>
            })}
        </Container>
    )
}
