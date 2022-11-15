import {useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import NavBar from '../componets/NavBar';


function BeersDetailsPage({beers}){
    const [Allbeers, setAllBeers] = useState(beers);
    

    const { beerId } = useParams();
    console.log(beerId)

    console.log(beerId)

    const beerSelected = beers.find((beer) => {
        return beer._id === beerId;
})

console.log(beerSelected)
    return(
        <div>
            <NavBar />
            <div>
            <img src={beerSelected.image} alt="..."/>
            <h2>{beerSelected.name}</h2>
            <p>{beerSelected.tagline}</p>
            <p>{beerSelected.first_brewed}</p>
            <p>{beerSelected.attenuation_level}</p>
            <p>{beerSelected.description}</p>
            <p>{beerSelected.contributed_by}</p>
            </div>
            


        </div>
    )
}

export default BeersDetailsPage