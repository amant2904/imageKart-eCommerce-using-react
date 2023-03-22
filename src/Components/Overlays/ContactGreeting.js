import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./ContactGreeting.module.css"

const BackDrop = () => {
    return (
        <div className={classes.backDrop}></div>
    )
}

const GreetingBox = (props) => {
    return (
        <div className={classes.greetingBox}>
            <h1>Thanks For Contacting Us</h1>
            <p>We will get back to you soon !</p>
            <button onClick={props.closeBox}>Close</button>
        </div>
    )
}

export default function ContactGreeting(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<GreetingBox closeBox={props.closeBox} />, document.getElementById("overlayBox"))}
        </React.Fragment>
    )
}
