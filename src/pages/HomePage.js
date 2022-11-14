import imageAllBeers from "../assets/beers.png";
import imageRandom from "../assets/random-beer.png";
import imageNewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={imageAllBeers}
            alt="All Beers"
          />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>



      <Link to="/random-beer">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={imageRandom}
            alt="All Beers"
          />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>



      <Link to="/new-beer">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={imageNewBeer}
            alt="All Beers"
          />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default HomePage;

{
  /* // <div>
    //   <Link to="/allBeers">
    //     <img src={imageAllBeers} alt="All Beers"/>
    //     <h2>All Beers</h2>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet dignissim condimentum. 
    //     Donec nisl tortor, auctor vel gravida quis, consectetur ut lacus. Sed suscipit non mauris ac iaculis. 
    //     Suspendisse ullamcorper sagittis leo, eu fermentum magna lacinia quis. Mauris cursus leo sed lacus blandit,
    //      vel sodales ipsum laoreet. Mauris eget rutrum nisi. In blandit varius iaculis. Proin id commodo lectus, 
    //      non finibus velit. Curabitur sit amet fermentum felis. Suspendisse dictum vel mi venenatis fermentum. 
    //      </p>
    //   </Link>
    // </div> */
}
