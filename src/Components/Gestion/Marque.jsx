import "bootstrap/dist/css/bootstrap.min.css";
import "./css.css"

function Marque(props) {
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

export default Marque;