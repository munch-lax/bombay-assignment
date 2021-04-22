
import { BrowserRouter, Route } from "react-router-dom";
import { fetchMovies } from "./actions";
import MovieDetail from "./Components/MovieDetail";
import MovieList from "./Components/MovieList";

import NavBar from "./Components/NavBar";

function App() {
return (

    <BrowserRouter className="App">
      <NavBar/>
      <Route exact path='/' component={MovieList}/>
      <Route exact path='/movie/:id' component={MovieDetail}/>
      
    </BrowserRouter>
  );
}

export default App;
