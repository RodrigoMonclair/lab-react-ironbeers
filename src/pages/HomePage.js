import imageAllBeers from "../assets/beers.png";
import imageRandom from "../assets/random-beer.png";
import imageNewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
      <Link to="/beers" className="list-group-item list-group-item-action">
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

      <Link to="/random-beer" className="list-group-item list-group-item-action">
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

      <Link to="/new-beer" className="list-group-item list-group-item-action">
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

