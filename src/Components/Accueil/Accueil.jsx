import "bootstrap/dist/css/bootstrap.min.css";
import './accueil.css'
import '../Assets/css/material-dashboard.css.map'

const Accueil = () => {

    return(
    <div class="ambony">

        <div className="dashboard-page">
            <h1>Tableau de bord des statistiques</h1>
            <div className="stats-container">
                <div className="statUser">
                    <h3>Utilisateurs actifs</h3>
                    <p>5</p>
                </div>
                <div className="statVente">
                    <h3>Ventes mensuelles</h3>
                    <p>500K</p>
                </div>
            </div>
        </div>
        
    </div>

    )
}

export default Accueil