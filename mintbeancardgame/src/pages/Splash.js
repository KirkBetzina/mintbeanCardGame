import React from 'react'
import Login from './Login'
import ModalInstructions from '../components/Modal'

const SplashPage = (props) => {
    return (
        <>
        <h1 className='welcomeHeader'>Let's Play Some Rummy</h1>
        <ModalInstructions/>
        {/* <button className="btn btn-lrg btn-danger btn-block" onClick={() => <ModalInstructions/>}>How to Play</button> */}
        <button className="btn btn-med btn-primary btn-block">START</button>
        <Login />
        </>   
    )



}
export default SplashPage