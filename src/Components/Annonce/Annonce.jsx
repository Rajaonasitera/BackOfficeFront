import "bootstrap/dist/css/bootstrap.min.css";
import "./css.css";
import { useEffect, useState } from "react";
// import Header from "../Header/Header";
// import { useEffect } from "react";

function Annonce(props) {
  const [noValide, setNoValide] = useState([]);
  const fnct = async () => {
    let url =
      "https://buycarwebservice-production.up.railway.app/annonce/listnonvalider";
    let token = localStorage.getItem("Token");
    console.log("tok :" + token);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    response = await response.json();
      setNoValide(response.object);
  };

  useEffect(() => {
    fnct();
  }, []);
  return (
    <>
      {/* <Header></Header> */}
      <div class="ambony">
        <header id="head">
          <div class="container">
            <div class="row">
              <h1 class="lead">Gerer les annonces</h1>
            </div>
          </div>
        </header>
        <div class="col-lg-4 col-md-8 col-sm-8">
          <div class="footer__newslatter"></div>
        </div>

        <div class="jumbotron top-space">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-8 col-sm-8">
                <table class="table table-striped table-bordered" className="tableAnn">
                  <tr>
                    <th>Id Annonce</th>
                    <th>Utilisateur</th>
                    <th>Marque voiture</th>
                    <th>Date annonce</th>
                    <th>Prix</th>
                  </tr>
                  {noValide.map(function (an, index, array) {
                    return (
                      <>
                        <tr key={an} className="titretable">
                          <td>{an.id_annonce}</td>
                          <td>{an.id_utilisateur}</td>
                          <td>{an.id_voiture}</td>
                          <td>{an.date_annonce}</td>
                          <td>{an.prix}</td>
                          <td>
                            <input
                              type="text"
                              id="text"
                              placeholder={an.libelle}
                            />
                          </td>
                          <td>
                            <div
                              onClick={async () => {
                                let url =
                                  "https://buycarwebservice-production.up.railway.app/annonce/valider/"+an.id_annonce;
                                let token = localStorage.getItem("Token");
                                await fetch(url, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + token,
                                  },
                                //   body: JSON.stringify(obj),
                                });
                                fnct();
                              }}
                            >
                              Valider
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Annonce;
