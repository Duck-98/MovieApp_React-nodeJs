import React,{useEffect} from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.movieTitle
    const moviePost = props.movieInfo.backdrop_path
    const movieRuntime = props.movieInfo.runtime

    useEffect(() => {
        let variables = {
            userFrom,
            movieId
        }

        Axios.post(`/api/favorite/favoriteNumber`, variables)
        .then(response => {
            if(response.data.success){

            }else{
                alert('숫자 정보를 가져오는데 실패하였습니다.')
            }
        })
    }, [])
    
    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite