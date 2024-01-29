import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Dropdown, Button } from 'react-bootstrap';
import logo from "../Assets/img/tesla-model-s.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-lg-between">
        <img src={logo} alt="Sweat-up" width="100px"/>
        <nav id="navbar" class="navbar order-last order-lg-0">
            <div>
            <Dropdown>
                <Dropdown.Toggle variant="dark">Gestion</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to={'/Marque'}>Marque</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={'/Categorie'}>Categorie</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={'/Energie'}>Energie</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={'/Boite_vitesse'}>Boite de vitesse</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div>
            <Button variant="dark">Statistiques</Button>
            </div>
            <div>
            <Button variant="dark">Annonces en attente</Button>
            </div>
            <div>
            <Button variant="dark"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button>
            </div>


		</nav>
      </div>
    </div>
  );
}

export default Header;
