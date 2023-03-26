import React, { useState } from "react";

const AuthContext = React.createContext({
    tokenId: null,
    isLoggedIn: false,
    login_handler: () => { },
    logout_handler: () => { }
})

export default AuthContext;

const AuthContextProvider = (props) => {

    const [loginStatus, setLoginStatus] = useState({
        tokenId: null,
        loggedIn: false
    })

    const login_handler = (id) => {
        setLoginStatus({
            tokenId: id,
            loggedIn: true
        })
        localStorage.setItem("tokenId", id);
    }

    const logout_handler = () => {
        setLoginStatus({
            tokenId: null,
            loggedIn: false
        })
        localStorage.removeItem("tokenId");
    }
    return (
        <AuthContext.Provider value={{
            tokenId: loginStatus.tokenId,
            isLoggedIn: loginStatus.loggedIn,
            login_handler: login_handler,
            logout_handler: logout_handler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }