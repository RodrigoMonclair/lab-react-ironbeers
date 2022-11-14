import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import NavBar from "../componets/NavBar";
import ListGroup from 'react-bootstrap/ListGroup';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get("https://ironbeer-api.fly.dev/");
    //   console.log(response.data)
      setBeers(response.data);
    }
    fetchBeers();
  }, []);
// console.log(beers)
  return (
    <div>
      <NavBar />
      {
        
        beers.map((beer)=>{
            return(
                <div key={beer._id}>
                <Link to ={`/beers/${beer._id}`}>
                
                <img src={beer.image} alt="..."/>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <small>{beer.contributed_by}</small>
                
                </Link>
            </div>
            )
            
        })

      }
    </div>
  );
}

export default AllBeersPage;
