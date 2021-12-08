import React from 'react'
import './login.css'
import { AiFillGithub } from 'react-icons/ai'
import Footer from '../Footer/Footer'
import NavBarLogin from './NavBarLogin/NavBarLogin'

export default function Login() {

    const github = () => {

       window.open('http://localhost:5000/auth/github', "_self" )

    }


    return (
        <>
            <NavBarLogin/>
            <div className="login-div">

                <div className="button-div">

                    <div className="logo" style={{  width: '70%', margin: 'auto', height: '20%', 'font-size': '20pt' }}>
                        Montecha Git App
                    </div>
                    <button className='loginWithGithub' onClick={github}>
                        <AiFillGithub
                            style={{ color: 'white', 'font-size': '22pt', 'margin-bottom':'10px' }}
                        />
                        <h5> Proceed with Github</h5>
                    </button>

                </div>

            </div>

            <Footer/>
        </>

    )
}
