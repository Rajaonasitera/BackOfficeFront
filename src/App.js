import './App.css';
// import Header from './Components/Header/Header';
import Accueil from './Components/Accueil/Accueil'
import Annonce from './Components/Annonce/Annonce';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import PageCategorie from './Pages/PageCategorie';
import PageMarque from './Pages/PageMarque';
import PageEnergie from './Pages/PageEnergie';
import BoiteVitesse from './Components/Gestion/Boite_vitesse';

function App() {

  return(
    <div>
   


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Accueil" element={<Accueil />}/>
        <Route path="/Annonce" element={<Annonce />}/>
        <Route path="/Categorie" element={<PageCategorie />}/>
        <Route path="/Marque" element={<PageMarque />}/>
        <Route path="/Energie" element={<PageEnergie />}/>
        <Route path="/Boite_vitesse" element={<BoiteVitesse />}/>
        {/* <Route path="/Accueil" element={<Accueil />}/>
        <Route path="/Accueil" element={<Accueil />}/>  */}
       {/* <Route path="/" element={<Login />}> */}
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
