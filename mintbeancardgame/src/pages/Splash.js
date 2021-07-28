import React from 'react'
import Login from './Login'
const SplashPage = (props) => {
    return (
        <>
        <h1>Welcome to Rummy</h1>
        <button className="btn btn-lrg btn-danger btn-block">How to Play</button>
        <button className="btn btn-med btn-primary btn-block">START</button>
        <Login />
        </>   
    )



}
export default SplashPage