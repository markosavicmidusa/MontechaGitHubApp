const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


router.get('/githubUsers', async (req, res) => {
    
    const url=`https://api.github.com/users`;
    const options ={
        "method":"GET",
    };
    const response = await fetch(url,options)
    const data = await response.json();
    res.json(data);
});


router.get('/githubUsers/:username', async (req, res) => {
  
    const url=`https://api.github.com/users/${req.params.username}`;
    const options ={
        "method":"GET",
    };

    const response = await fetch(url,options)
    const data = await response.json();
    res.json(data);
})

router.get('/githubUsers/:username/followers', async (req, res) => {
    
    const url=`https://api.github.com/users/${req.params.username}/followers`;
    const options ={
        "method":"GET",
    };

    const response = await fetch(url,options)
    const data = await response.json();
    res.json(data);
})

router.get('/githubUsers/:username/repos', async (req, res) => {
   
    const url=`https://api.github.com/users/${req.params.username}/repos`;
    const options ={
        "method":"GET",
    };

    const response = await fetch(url,options)
    const data = await response.json();
    res.json(data);
})

module.exports = router;