import "bootstrap/dist/css/bootstrap.min.css";
import "./css.css"
import { useEffect, useState } from "react";


function Energie(props) {
    const [all, setAll] = useState([]);
  const fnct = async () => {
    let url =
      "https://webservicevoiture-production.up.railway.app/energie/list";
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
            <div className="container">
                <div class="row">
                    <h1 class="lead">Gerer les Energies</h1>
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
                            <tr className="titretable">
                                <th>Id Energie</th>
                                <th>Nom Energie</th>
                            </tr>
                            {all.map(function (an, index, array) {
                  return (
                    <>
                      <tr key={an} className="titretable">
                        <td>{an.id_energie}</td>
                        <td><input type="text" id="text" placeholder={an.libelle}/></td>
                        <td>
                        <div
                            onClick={async () => {
                                let text = document.getElementById('text');
                                let obj = {
                                    id_energie:an.id_energie,
                                    libelle:text.value
                                }
                              let url =
                                "https://webservicevoiture-production.up.railway.app/energie/update" 
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
                                "https://webservicevoiture-production.up.railway.app/energie/delete/" +
                                an.id_energie;
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
        <div className="insertion">
        <h1>Ajouter une nouvelle energie</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Libelle
          </label>
          <input
            type="text"
            class="form-control"
            id="libelle"
            placeholder="exemple : 4x4"
          />
        </div>
        <button
          onClick={async () => {
            let libelle = document.getElementById("libelle");
            let energie = {
              libelle: libelle.value,
            };
            console.log(energie);
            let url =
              "https://webservicevoiture-production.up.railway.app/energie/insert";
            let token = localStorage.getItem("Token");
            await fetch(url, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              body: JSON.stringify(energie),
            });
            // response = await response.json();
            fnct();
          }}
        >
          Insert
        </button>
        </div>
      </div>
  );
}

export default Energie;