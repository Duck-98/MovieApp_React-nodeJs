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

router.post('/favorited', (req,res) =>{
    req.body.movieId

    //영화를 좋아요 리스트에 넣었는지 정보를 db에서 가져오는 api
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
    .exec((err, info) => {
        if(err) return res.status(400).send(err) //에러가 발생하면 status 400
        //info의 배열안에 값이 비어있다면, favoritelist에 아무것도 담지 않았다는 의미
        let result = false;
        if(info.length !== 0){
            result = true
        }
        res.status(200).json({success: true ,favorited : result}) // movieId를 찾았다면 info의 length를 보내줌.
    })
    
} ) 

module.exports = router;
