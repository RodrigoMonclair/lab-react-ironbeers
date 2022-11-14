import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import NavBar from '../componets/NavBar';
import axios from 'axios';

function BeersDetailsPage(){
    const [beers, setBeers] = useState([]);
    


    useEffect(() => {
      async function fetchBeers() {
        const response = await axios.get(`https://ironbeer-api.fly.dev/`);
        // console.log(response.data)
        setBeers(response.data);
      }
      fetchBeers();
    }, []);
    // console.log(beers)
    const { beerId } = useParams();

    console.log(beerId)

    const beerSelected = beers.find((beer) => {
        return beer._id === beerId;
})

console.log(beerSelected)
    return(
        <div>
            <NavBar />
            {/* <img src={beerSelected.image} alt="..."/>
            <h2>{beerSelected.name}</h2>
            <p>{beerSelected.tagline}</p>
            <p>{beerSelected.first_brewed}</p>
            <p>{beerSelected.attenuation_level}</p>
            <p>{beerSelected.description}</p>
            <p>{beerSelected.contributed_by}</p> */}


        </div>
    )
}

export default BeersDetailsPage