import { useState} from "react";
import {Link} from 'react-router-dom'
import NavBar from "../componets/NavBar";

function AllBeersPage({beers}) {


  const [Allbeers, setAllBeers] = useState(beers);

  
console.log(Allbeers)
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
