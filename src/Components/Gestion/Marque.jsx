import "bootstrap/dist/css/bootstrap.min.css";
import "./css.css"
import { useEffect, useState } from "react";

function Marque(props) {
    const [all, setAll] = useState([]);
  const fnct = async () => {
    let url =
      "https://webservicevoiture-production.up.railway.app/marque/list";
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
    setAll(response.object);
  };

  useEffect(() => {
    fnct();
  }, []);
  return (
    <div class="ambony">
        <header id="head">
            <div class="container">
                <div class="row">
                    <h1 class="lead">Gerer les marques</h1>
                </div>
            </div>
        </header>
        <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__newslatter">
            </div>
        </div>

        <div class="jumbotron top-space">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-8 col-sm-8">
                        <table class="table table-striped table-bordered">
                            <tr>
                                <th>Id Marque</th>
                                <th>Nom Marque</th>
                            </tr>
                            {all.map(function (an, index, array) {
                  return (
                    <>
                      <tr key={an}>
                        <td>{an.id_categorie}</td>
                        <td><input type="text" id="text" placeholder={an.libelle}/></td>
                        <td>
                        <div
                            onClick={async () => {
                                let text = document.getElementById('text');
                                let obj = {
                                    id_marque:an.id_marque,
                                    libelle:text.value
                                }
                              let url =
                                "https://webservicevoiture-production.up.railway.app/marque/update" 
                              let token = localStorage.getItem("Token");
                              await fetch(url, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: "Bearer " + token,
                                },
                                body: JSON.stringify(obj)
                              });
                              fnct();
                            }}
                          >
                            Modifier
                            </div>
                            </td>
                        <td>
                          <div
                            onClick={async () => {
                              let url =
                                "https://webservicevoiture-production.up.railway.app/marque/delete/" +
                                an.id_marque;
                              let token = localStorage.getItem("Token");
                              await fetch(url, {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: "Bearer " + token,
                                },
                              });
                              fnct();
                            }}
                          >
                            Supprimer
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
        <h1>Ajouter une nouvelle marque</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Libelle
          </label>
          <input
            type="text"
            class="form-control"
            id="libelle"
            placeholder="exemple : Toyota"
          />
        </div>
        <button
          onClick={async () => {
            let libelle = document.getElementById("libelle");
            let marque = {
              libelle: libelle.value,
            };
            console.log(marque);
            let url =
              "https://webservicevoiture-production.up.railway.app/marque/insert";
            let token = localStorage.getItem("Token");
            await fetch(url, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              body: JSON.stringify(marque),
            });
            fnct();
          }}
        >
          Insert
        </button>
      </div>
    
  );
}

export default Marque;