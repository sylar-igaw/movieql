import {  getMovies, getMovie, getSuggestions, getAdAccounts } from "./db"
const resolvers = {
    Query : {
        movies : (_, {limit, rating}) => getMovies(limit, rating),
        movie : (_, {id}) => getMovie(id),
        suggestion : (_, {id}) => getSuggestions(id),
    }
    
}

export default resolvers;