import "./App.css";
import AllBeersPage from "./pages/AllBeersPage";
import BeersDetailsPage from "./pages/BeersDetailsPage";
import NewBeersPage from "./pages/NewBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

function App() {

  const [beers, setBeers] = useState([]);
    


  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(`https://ironbeer-api.fly.dev/`);
      // console.log(response.data)
      setBeers(response.data);
    }
    fetchBeers();
  }, []);


  return (
    <div className="App">
      
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>

        <Route
          path="/beers"
          element={<AllBeersPage beers={beers}/>}
        ></Route>

        <Route
          path="/random-beer"
          element={<RandomBeersPage beers={beers}/>}
        ></Route>

        <Route
          path="/beers/:beerId"
          element={<BeersDetailsPage beers={beers}/>}
        />

        <Route
          path="new-beer"
          element={<NewBeersPage beers={beers}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
