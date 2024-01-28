import "bootstrap/dist/css/bootstrap.min.css";
import "./css.css"


function Energie(props) {
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
                            <tr>
                                <th>Id Energie</th>
                                <th>Nom Energie</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Modifier</td>
                                <td>Supprimer</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Energie;