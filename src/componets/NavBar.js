import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div style={{width:"400px", margin:"10px"}}>
     <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🏚
        </Link>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
