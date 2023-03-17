import React from 'react'
import NavBar from './NavBar'

export default function Header(props) {
    return (
        <React.Fragment>
            <NavBar showCart={props.showCart} />
        </React.Fragment>
    )
}
