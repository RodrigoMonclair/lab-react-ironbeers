import NavBar from "../componets/NavBar"
import {useState} from 'react'

function RandomBeersPage({beers}){
    // console.log(beers)
    const [allBeers, setAllBeers] = useState(beers)

    const beerSelected = allBeers[Math.round(Math.random()*allBeers.length)] 
    
    
    return(
        <div>
            <NavBar/>
            <div>
            <img src={beerSelected.image} alt="..." width={"200px"}/>
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

export default RandomBeersPage