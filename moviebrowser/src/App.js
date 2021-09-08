import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutView from './Components/About';
import {Switch, Route} from 'react-router-dom';
import SearchView from './Components/Search';
import MovieView from './Components/MovieView';
import NotFound from './Components/NotFound';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() =>{
    if(searchText){
      console.log(searchText, "In useEffect");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=471f57e06cd112ed3c463b15140de143&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
      setSearchResults(data.results)
      })
   }
  }, [searchText]);

  
  setTimeout(() => {
    console.log(searchText, "Search Text");
  }, 2000)
  

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path = "/" exact>
          <Home />
        </Route>
        <Route path = "/about" component = {AboutView}>
        </Route>
        <Route path = "/search">
          <SearchView keyword = {searchText} searchResults = {searchResults}/>
        </Route>
        <Route path = "/movies/:id" component = {MovieView} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  );
}

export default App;
