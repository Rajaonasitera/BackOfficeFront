import './App.css';
import Header from './Components/Header/Header';
import Accueil from './Components/Accueil/Accueil'
import Annonce from './Components/Annonce/Annonce';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return(
    <div>
      {/* <Header/> */}
      {/* <Annonce/> */}


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Accueil" element={<Accueil />}/>
        <Route path="/Annonce" element={<Annonce />}/>
        {/* <Route path="/Accueil" element={<Accueil />}/>
        <Route path="/Accueil" element={<Accueil />}/> */}
        {/* <Route path="/" element={<Login />}> */}
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
