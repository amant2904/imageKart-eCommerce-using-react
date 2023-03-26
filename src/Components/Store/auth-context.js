import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    tokenId: null,
    isLoggedIn: false,
    login_handler: () => { },
    logout_handler: () => { },
    userEmail: null
})

export default AuthContext;

const AuthContextProvider = (props) => {

    const [loginStatus, setLoginStatus] = useState({
        tokenId: null,
        loggedIn: false,
        userEmail: null
    })

    const login_handler = (id, email) => {
        console.log(111);
        setLoginStatus({
            tokenId: id,
            loggedIn: true,
            userEmail: email
        })
        localStorage.setItem("tokenId", id);
        localStorage.setItem("userEmail", email);
    }

    const logout_handler = () => {
        setLoginStatus({
            tokenId: null,
            loggedIn: false,
            userEmail: null
        })
        localStorage.removeItem("tokenId");
        localStorage.removeItem("userEmail");
    }

    useEffect(() => {
        if (localStorage.getItem("tokenId")) {
            setLoginStatus({
                tokenId: localStorage.getItem("tokenId"),
                loggedIn: true,
                userEmail: localStorage.getItem("userEmail")
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            tokenId: loginStatus.tokenId,
            isLoggedIn: loginStatus.loggedIn,
            login_handler: login_handler,
            logout_handler: logout_handler,
            userEmail: loginStatus.userEmail
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }