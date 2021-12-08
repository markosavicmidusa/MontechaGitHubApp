import HomeTempComp from "./components/Home/HomeTempComp";
import AllUsers from "./components/AllUsers/AllUsers";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './app.css'
import { useEffect, useState } from "react";




const App = () => {

    const [user, setUser] = useState(null);

    useEffect(()=> {
     const getUser = async () =>{
         fetch('http://localhost:5000/auth/login/success',{
             method: 'GET',
             credentials: 'include',
             headers: {
                Accept: "application/json",
                "Content-Type": "application/json", 
                "Access-Control-Allow-Credentials":true
             }
         }).then((response) => {
             if(response.status ===200) return response.json();
             throw new Error('autentification has been failed!')
         }).then(resObject =>{
            setUser(resObject.user)
         }).catch((err) =>{
             console.log(err);
         })
     }
     getUser();
    }, []); 
    
    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=> {
     const getUsers = async () =>{
        const url='http://localhost:5000/api/githubUsers';
        const options ={
            "method":"GET",
        };
    
        const response = await fetch(url,options)
        const data = await response.json();
        setAllUsers(data);
     }
     getUsers();
    }, []); 

    return (

        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
                    <Route path='/' element={user ? <HomeTempComp mypage user={user}/> : <Navigate to='/login' />} />
                    <Route path='/allUsers' element={user ? <AllUsers user={user} users={allUsers} /> : <Navigate to='/login' />} />
                    <Route path='/allUsers/:id' element={user ? <HomeTempComp user={user}/> : <Navigate to='/login' />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
};

export default App;