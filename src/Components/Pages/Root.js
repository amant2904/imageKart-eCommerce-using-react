import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function Root(props) {
    return (
        <React.Fragment>
            <Header showCart={props.showCart} />
            <Outlet />
        </React.Fragment>
    )
}
