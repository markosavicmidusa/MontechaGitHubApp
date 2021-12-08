import React from 'react'
import { Link } from 'react-router-dom'
import './cardcmp.css'

export default function CardCmp({ data, followers }) {

    const Followers = () => {
        return (
            <>

                    <Link style={{ 'text-decoration': 'none', color: 'inherit' }} to={`/allUsers/${data.login}`}>
                        <div className="notifications-image">

                            <img src={data.avatar_url} width="100%" height="100%" style={{ 'border-radius': '50%' }} alt='avatar' />

                        </div>
                        <div className="notifications-text">{data.login}</div>
                    </Link>
                
            </>

        )


    }

    const AllUsers = () => {
        return (

            <>
                <Link style={{ 'text-decoration': 'none', color: 'inherit' }} to={`/allUsers/${data.login}`}>
                    <div className="notifications-image">

                        <img src={data.avatar_url} width="80%" height="80%" style={{ 'border-radius': '50%' }} alt='avatar' />

                    </div>
                    <div className="notifications-text">{data.login}</div>
                </Link>
            </>

        )

    }


    return (
        <div className="notifications-bar-container" >
            {followers ? <Followers /> : <AllUsers />}
        </div>



    )
}
