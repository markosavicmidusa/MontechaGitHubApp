const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passportSetup')
const  passport = require ('passport');
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/api')
require('dotenv').config()

const app=express();

const key=process.env.KEY;

app.use(cookieSession(

    {name:'session',
     keys:[`${key}`],
     maxAge: 24 * 60 * 60 *100 
    }

));


app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: 'GET, POST, PUT, DELETE',
        credentials: true,
    })
); 

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen('5000', () =>{
    console.log('Server is running');
})
