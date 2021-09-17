const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom : { 
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    movieId : {
        type: String
    },
    movieTitle : {
        type : String
    },
    moviePost : {
        type : String
    },
    movieRunTime :{
        type: String
    }
    
}, {timestamps : true})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite } // 다른 곳에서도 favorite 모델을 사용할 수 있게 하기 위해서