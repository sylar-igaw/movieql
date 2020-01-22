import fetch from "node-fetch"
import axios from "axios"
const BASE_URL = "https://yts.lt/api/v2";
const MOVIE_LIST_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data : {
            data : {movies}
        }
    } = await axios(MOVIE_LIST_URL, {
        params : {
            limit,
            minimum_rating : rating
        }
    });
    //console.log("-----------------------movies----------------------------");
    //console.log(movies);
    return movies;
}

export const getMovie = async id => {
    console.log(id);
    const {
        data : {
            data : {movie}
        }
    } = await axios(MOVIE_DETAILS_URL , {
        params : {
            movie_id : id
        }
    });
    return movie;
}

export const getSuggestions = async id=> {
    console.log(MOVIE_SUGGESTION_URL);
    const {
        data : {
            data : {movies}
        }
    } = await axios(MOVIE_SUGGESTION_URL , {
        params : {
            movie_id : id
        }
    });
    return movies; 
}




