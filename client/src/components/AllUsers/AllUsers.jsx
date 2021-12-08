import React, { useEffect, useState } from 'react'
import CardCmp from '../CardCmp/CardCmp.jsx'
import Navbar from '../NavBar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import './allusers.css'

export default function AllUsers({ user, users }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [profileMenuFilterOption, setprofileMenuFilterOption] = useState(0);

    useEffect(() => {

        if (searchTerm === '') {
            setprofileMenuFilterOption(0);
        } else {
            setprofileMenuFilterOption(1);

        }


    }, [searchTerm]);

    //all users
    const filter0 = () => {

        return (
            <>
                {
                    users.map((user) => (
                        <CardCmp key={user.id} data={user} />
                    ))
                }

            </>
        )
    }
    //searched by input
    const filter1 = () => {

        return (

            <>
                {
                    users.filter((user) => {
                        if (searchTerm === '') {
                            return user;

                        } else if (user.login.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return user;
                        }  
                    }).map((user) => (
                        <CardCmp key={user.id} data={user} />
                    ))
                }

            </>
        )
    }



    return (

        <>

            <Navbar key={user.id} data={user} />

            <div className="all-users-container">
                <div className="all-users-headline">List of All GitHub Users
                </div>
                <div className="searchInputDiv">
                    <input placeholder='Search for GitHub User' type="text" className='searchInput'
                        onChange={event => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>
                <div className="list-wrapper">

                    {profileMenuFilterOption === 0 ? filter0() : filter1()}

                </div>
            </div>

            <Footer />

        </>
    )
}
