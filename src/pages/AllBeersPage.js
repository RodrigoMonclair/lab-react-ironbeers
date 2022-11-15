import { useState} from "react";
import {Link} from 'react-router-dom'
import NavBar from "../componets/NavBar";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllBeersPage({beers}) {


  const [Allbeers, setAllBeers] = useState(beers);

  
console.log(Allbeers)
  return (
    <div>
      <NavBar />
      {
        
        beers.map((beer)=>{
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
