import React from 'react'
import { Button, Container } from 'react-bootstrap'
import classes from "./HomePage.module.css"

export default function HomePage() {
    const tours = [
        {
            date: "JUL 16",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "JUL 19",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "JUL 22",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "JUL 29",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "AUG 2",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "AUG 7",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        }
    ]

    return (
        <React.Fragment>
            <Container fluid className='bg-secondary d-flex flex-column align-items-center'>
                <h1 className={`text-light text-center ${classes.header_text}`}>The Generics</h1>
                <button className={classes.heroBtn}>Get Our Latest Album</button>
                <button className={classes.playBtn}>&#9654;</button>
            </Container>
            <Container className='d-flex flex-column align-items-center'>
                <h1 className="text-center my-4">TOURS</h1>
                <ul>
                    {tours.map((tour) => {
                        return <li className={classes.tourList}>
                            <span>{tour.date}</span>
                            <span>{tour.city}</span>
                            <span>{tour.place}</span>
                            <Button variant='info' className='btn-sm'>BUY TICKETS</Button>
                        </li>
                    })}
                </ul>
            </Container>
        </React.Fragment>
    )
}
