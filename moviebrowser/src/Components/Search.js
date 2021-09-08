import Hero from "./Hero";
import { Link } from "react-router-dom";
import movieIcon from "./Images/movieIcon.jpg";
const MovieCard = ({movie}) => {

    var posterUrl = movieIcon;
    console.log(movieIcon);

    if(movie.poster_path)
    {
        posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    }
    const detailUrl = `/movies/${movie.id}`
    return(
    <div className = "col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={detailUrl} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </div>
    )
}

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
    var resultsHTML = "<></>";
        if(searchResults)
        {
            console.log(searchResults);
            resultsHTML = searchResults.map((obj,i) =>{
                return <MovieCard movie = {obj} key = {i}/>
            })
        }
        else
        {
            console.log(searchResults);
            resultsHTML = "Type to search";
        }

        if(searchResults && searchResults.length==0)
        {
            resultsHTML = (
                <h2>No Results</h2>
            );
        }
    
        return (
            <>
            <Hero text = {title}/>
            {resultsHTML &&
                <div className = "container">
                    <div className = "row">
                        {resultsHTML}
                    </div>
                </div>
            }
            </>
        )
}

export default SearchView;