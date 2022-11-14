import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../componets/NavBar";

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
console.log(beers)
  return (
    <div>
      <NavBar />
      {
        
        beers.map((beer)=>{
            return(
                <div key={beer._id}>
                <img src={beer.image} alt="..."/>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <small>{beer.contributed_by}</small>
            </div>
            )
            
        })

        
      }
    </div>
  );
}

export default AllBeersPage;
