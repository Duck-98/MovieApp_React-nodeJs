const express = require('express');
const router = express.Router();
const {Favorite} = require('../models/Favorite');

router.post('/favoriteNumber', (req,res) =>{
    req.body.movieId

    //mongoDB에서 favorite 숫자를 가져오기(api)
    Favorite.find({"movieId": req.body.movieId})
    .exec((err, info) => {
        if(err) return res.status(400).send(err) //에러가 발생하면 status 400

        res.status(200).json({success: true ,favoriteNumber : info.length}) // movieId를 찾았다면 info의 length를 보내줌.
    })
    
} ) 

module.exports = router;
