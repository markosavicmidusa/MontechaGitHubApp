import React, { useEffect, useState } from 'react'
import CardCmp from '../CardCmp/CardCmp'
import Projects from './ProjectsCmp/Projects'
import './hometempcmp.css'

import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router'
import UserInfoList from './UserInfoList/UserInfoList'



        

export default function HomeTempComp({ mypage, user }) {



    const MyPage = () => {

        const [mainData, setMainData] = useState([]);
        const [created, setCreated] = useState(null);
        const [updated, setUpdated] = useState(null);

        const [followersData, setFollowersData] = useState([]);
        const [projectData, setProjectData] = useState([]);

        const path = user.username;

        useEffect(() => {

            const getProfile = async () => {

                const url = `http://localhost:5000/api/githubUsers/${path.toString()}`;
                const options = {
                    "method": "GET",
                };

                const response = await fetch(url, options)
                const data = await response.json();
                setMainData(data);
                setCreated(data.created_at.toString().slice(0, 10));
                setUpdated(data.updated_at.toString().slice(0, 10));

                const urlFollowers = `http://localhost:5000/api/githubUsers/${path.toString()}/followers`;
                const optionsFollowers = {
                    "method": "GET",
                };

                const responseFollowers = await fetch(urlFollowers, optionsFollowers)
                const dataFollowers = await responseFollowers.json();
                setFollowersData(dataFollowers);
            };

            const getProjects = async () => {

                const urlProjects = `http://localhost:5000/api/githubUsers/${path.toString()}/repos`;
                const optionsProjects = {
                    "method": "GET",
                };
        
                const responseProjects = await fetch(urlProjects, optionsProjects)
                const dataProjects = await responseProjects.json();
                setProjectData(dataProjects);
        
            }
        
                getProfile();
                getProjects();

        }, []);



        return (
            <>

                <Navbar data={user} />
                <div className="profile-container" >
                    <div>
                        <img src={mainData.avatar_url} alt="pcf" className="profile-component-img" height="25%" width="25%" />
                    </div>
                    <div className="all-users-headline" style={{ 'margin-top': '-15%', 'font-size': "30pt" }} >  {mainData.name}
                        <div style={{ 'font-size': "15pt" }}>
                            {mainData.login}
                        </div >

                    </div>
                    <div className="userInfo">

                        <div className='userInfo1'>

                            <UserInfoList mainData={mainData} updated={updated} created={created} />

                            <div className="user-info-followers">
                                <h3 >Followers</h3>
                                {<div className="project-wrapper">

                                    {followersData.map(data => (
                                        <CardCmp followers key={data.id} data={data} />
                                    ))}

                                </div>}
                            </div>

                        </div>
                        <div className='userInfo2'>

                            <div className="userInfo1-projects" >
                                <h3 >Projects</h3>
                                <div className="project-wrapper" >

                                    {projectData.map(projects => (
                                        <Projects key={projects.id} dataProjects={projects} />
                                    ))}

                                </div>
                            </div>

                            <div className="user-graph">
                                GRAFIKON

                            </div>

                        </div>

                    </div>
                </div>

                <Footer />

            </>
        )
    }

    const UserPage = () => {

        const [mainData, setMainData] = useState([]);
        const [created, setCreated] = useState(null);
        const [updated, setUpdated] = useState(null);

        const [followersData, setFollowersData] = useState([]);
        const [projectData, setProjectData] = useState([]);
        const location = useLocation();
        console.log(location);

        const path = location.pathname.split('/')[2];
        

        useEffect(() => {

            const getProfile = async () => {
                const url = `http://localhost:5000/api/githubUsers/${path.toString()}`;
                const options = {
                    "method": "GET",
                };

                const response = await fetch(url, options)
                const data = await response.json();
                setMainData(data);
                setCreated(data.created_at.toString().slice(0, 10));
                setUpdated(data.updated_at.toString().slice(0, 10));
            };

            const getFollowers = async () => {

                const urlFollowers = `http://localhost:5000/api/githubUsers/${path.toString()}/followers`;
                const optionsFollowers = {
                    "method": "GET",
                };

                const responseFollowers = await fetch(urlFollowers, optionsFollowers)
                const dataFollowers = await responseFollowers.json();
                setFollowersData(dataFollowers);

            }

            const getProjects = async () => {

                const urlProjects = `http://localhost:5000/api/githubUsers/${path.toString()}/repos`;
                const optionsProjects = {
                    "method": "GET",
                };

                const responseProjects = await fetch(urlProjects, optionsProjects)
                const dataProjects = await responseProjects.json();
                setProjectData(dataProjects);

            }

                getProfile();
                getFollowers();
                getProjects();

        }, []);

        return (
            <>
                <Navbar data={user} />
                <div className="profile-container" >
                    <div>{
                        <img src={mainData.avatar_url} alt="pcf" className="profile-component-img" height="25%" width="25%" />
                    }
                    </div>
                    <div className="all-users-headline" style={{ 'margin-top': '-15%', 'font-size': "30pt" }} >  {mainData.name}
                        <div style={{ 'font-size': "15pt" }}>
                            {mainData.login}
                        </div >

                    </div>
                    <div className="userInfo">

                        <div className='userInfo1'>

                            <UserInfoList mainData={mainData} updated={updated} created={created} />

                            <div className="user-info-followers">
                                <h3 >Followers</h3>
                                {<div className="project-wrapper">

                                    {followersData.map(data => (
                                        <CardCmp key={data.id} data={data} />
                                    ))}

                                </div>}
                            </div>

                        </div>
                        <div className='userInfo2'>

                            <div className="userInfo1-projects" >
                                <h3 >Projects</h3>
                                <div className="project-wrapper" >

                                    {projectData.map(projects => (
                                        <Projects key={projects.id} dataProjects={projects} />
                                    ))}


                                </div>
                            </div>

                            <div className="user-graph">
                                GRAFIKON

                            </div>

                        </div>

                    </div>
                </div>

                <Footer />

            </>

        )
    }

    return (
        <>
            {mypage ? <MyPage /> : <UserPage />}
        </>
    )
}
