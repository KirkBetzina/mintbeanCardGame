import React from 'react'
import Login from './Login'
import ModalInstructions from '../components/Modal'

const SplashPage = (props) => {
    return (
        <>
        <div className='welcome-header'>
            <h1 >Let's Play Some Rummy</h1>
        </div>
        <ModalInstructions/>
        <button className="btn btn-med btn-primary btn-block start-button">START</button>
        <Login />
        </>   
    )



}
export default SplashPage