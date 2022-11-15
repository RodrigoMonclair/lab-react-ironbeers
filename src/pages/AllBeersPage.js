import { useState} from "react";
import {Link} from 'react-router-dom'
import NavBar from "../componets/NavBar";
import Card from 'react-bootstrap/Card';
import SearchBar from "../componets/SearchBar";


function AllBeersPage({beers}) {


  const [allBeers, setAllBeers] = useState(beers);
  const [search, setSearch] = useState("")
  
console.log(allBeers)
  return (
    <div>
      <NavBar />
      <SearchBar search={search} setSearch={setSearch}/>
      {
        
        allBeers.filter((beer)=>{
            return beer.name.toLowerCase().includes(search.toLowerCase())
        }).map((beer)=>{
            return(
              
            <div key={beer._id} style={{width:"400px", margin:"10px"}}>
                <Link to ={`/beers/${beer._id}`} className="list-group-item list-group-item-action">
                <Card>
                <Card.Body>
                <img src={beer.image} alt="..." width={"100px"}/>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <small>{beer.contributed_by}</small>
                </Card.Body>
                </Card>
                </Link>
            </div>
            )
            
        })

      }
    </div>
  );
}

export default AllBeersPage;
