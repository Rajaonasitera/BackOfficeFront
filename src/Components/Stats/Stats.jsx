import "bootstrap/dist/css/bootstrap.min.css";
import '../Assets/css/material-dashboard.css.map';
import "./stats.css"
import { useEffect, useState } from "react";

const Stats = () => {
    const [utilisateur, setUtilisateur] = useState(0);
    const [vente, setVente] = useState(0);
    const fnct = async () => {
      let url1 =
        "https://buycarwebservice-production.up.railway.app/stats/nbutilisateur";
      let token = localStorage.getItem("Token");
      console.log("tok :" + token);
      let response1 = await fetch(url1, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      response1 = await response1.json();
      setUtilisateur(response1.object);

      let url =
        "https://buycarwebservice-production.up.railway.app/stats/nbvente";
      console.log("tok :" + token);
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      response = await response.json();
      setVente(response.object);
    };
  
    useEffect(() => {
      fnct();
    }, []);
    return(
    <div class="ambony">

        {/* <div class="container">
            <div class="donut-chart-block block"> 
                <h2 class="titular">NOMBRE</h2> */}
                {/* <div class="donut-chart">
                            <div id="porcion1" class="recorte">
                                <div class="quesito ios" data-rel={utilisateur}></div>
                            </div>
                            <div id="porcion2" class="recorte">
                                <div class="quesito mac" data-rel={vente}></div>
                            </div>
                                <p class="center-date">Nombre<br/>
                                    <span class="scnd-font-color">2024</span>
                                </p>        
                    </div> */}
                    {/* <ul class="os-percentages horizontal-list">
                        <li>
                            <p class="ios os scnd-font-color">Nombre utilisateur</p>
                            <p class="os-percentage">{utilisateur}<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="mac os scnd-font-color">Nombre Vente</p>
                            <p class="os-percentage">{vente}<sup>%</sup></p>
                        </li>
                    </ul>
                </div> */}

<div class="stats-container">
    <div class="statistic">
        <h2 class="statistic-title">Nombre d'utilisateurs</h2>
        <p class="statistic-value">{utilisateur}</p>
    </div>
    <div class="statistic">
        <h2 class="statistic-title">Nombre de ventes</h2>
        <p class="statistic-value">{vente}</p>
    </div>
</div>

        
    </div>

    )
}

export default Stats