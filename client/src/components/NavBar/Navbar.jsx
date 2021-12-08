import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar({ data }) {
    

    
    const logout = () =>{

        window.open('http://localhost:5000/auth/logout', "_self" )
        
    }
    
    return (
       
        <>
            
            <div className='nav-bar'>
                <div className='logo' >
                   <Link style={{'text-decoration':'none', 'color':'inherit', 'font-family': 'Dancing Script,cursive'}} to='/'> Montecha Git App </Link>
                </div>
                <div className='navigation-page'>

                    <ul className='pages-list'>
                        <li className='listItem'><Link style={{'text-decoration':'none', color:'inherit'}} to='/'>Home Page</Link></li>
                        <li className='listItem'><Link style={{'text-decoration':'none', color:'inherit'}} to='/allUsers'>All Users</Link></li>
                        <li className='listItem'><Link style={{'text-decoration':'none', color:'inherit'}} to='#'>Page 3</Link></li>
                        <li className='listItem'><Link style={{'text-decoration':'none', color:'inherit'}} to='#'>Page 4</Link></li>
                    </ul>
                </div>
                <div className='navigation-option'>
                    <div className='welcome' >{data.displayName}</div>
                    <img src={data.photos[0].value} alt="pfc" className="profile-picture" onClick={logout}/>
                </div>
            </div>

        </>

    );
}
