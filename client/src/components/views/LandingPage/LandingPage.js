import React, {useEffect,useState} from 'react'
import {API_URL, API_KEY,IMAGE_BASE_URL} from "../../Config";
import { FaCode } from "react-icons/fa";
import MainImage from './Sections/MainImage';
import axios from 'axios';
import GridCards from '../commons/GridCards';
import {Row} from 'antd';

function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage]= useState(0);
    //Usestate(변수)를 이용하여 api 정보를 불러옴.
    useEffect(() => {
       const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetchMovies(endpoint);

    }, [])

    const fetchMovies = (endpoint) =>{
        
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies([...Movies, ...response.results]) // 불러온 api response 값에서 팔요한 정보를 넣어줌.
            setMainMovieImage(response.results[0])
            setCurrentPage(response.page)
        })
    }


    const loadMoreItems = () => {

        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);

    }

    return (
        <div style={{width : '100%' , margin : '0'}}>
            {/* Main Image */}
            {MainMovieImage &&
            <MainImage 
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
            />
            }

            <div style={{ width : '85%', margin : '1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr />
                {/* Movie Grid Cards */}
                <Row gutter={[16,16]}>
                    
                {Movies && Movies.map((movie, index)=>(
                <React.Fragment key={index}>
                    <GridCards 
                        landingPage
                        image={movie.poster_path ?  //movieposter이 없으면 그대로 api를 받아오고 없으면 null값으로 받아옴
                             `${IMAGE_BASE_URL}w500${movie.poster_path}`  : null}
                        movieId={movie.id}
                        movieName={movie.original_title}
                    
                    />
                </React.Fragment>
                ))}
                </Row>
                
            </div>
          <div style={{display : 'flex', justifyContent :'center'}}>
              <button onClick={loadMoreItems}> Load More </button>
          </div>
        </div>
    )
}

export default LandingPage
