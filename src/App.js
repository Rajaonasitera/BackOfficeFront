import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import PageCategorie from './Pages/PageCategorie';
import PageMarque from './Pages/PageMarque';
import PageEnergie from './Pages/PageEnergie';
import BoiteVitesse from './Pages/PageBoite_vitesse';
import PageStats from './Pages/PageStats';
import PageAccueil from './Pages/PageAccueil';

function App() {

  return(
    <div>
   


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Accueil" element={<PageAccueil />}/>
        <Route path="/Categorie" element={<PageCategorie />}/>
        <Route path="/Marque" element={<PageMarque />}/>
        <Route path="/Energie" element={<PageEnergie />}/>
        <Route path="/Boite_vitesse" element={<BoiteVitesse />}/>
        <Route path="/Statistique" element={<PageStats />}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
