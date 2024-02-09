import "./login.css";
import user_icon from "../Assets/person.png";
import mdp_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <>
    <div className="bodylogin">
    <div className="bienvenue">
    <h1 style={{color:'black'}}>BACKOFFICE</h1>
    <p style={{color:'black'}}>Bienvenue dans le backoffice de notre site de vente de voitures ! 
      Nous sommes ravis de vous accueillir dans cet espace 
      dédié à la gestion efficace de notre plateforme. 
      En tant qu'administrateurs, vous avez désormais accès à un ensemble d'outils puissants 
      qui vous permettront de surveiller et de gérer toutes les activités liées à notre site.</p>
      </div>
    <div className="login-container">
      <h1 style={{color:'black'}}>Login</h1>
      <form>
        <label htmlFor="username">
          <img src={user_icon} alt="X" width="10px" /> Identifiant
        </label>
        <input type="email" id="username" value="admin@gmail.com" />

        <label htmlFor="password">
          <img src={mdp_icon} alt="X" width="10px" /> Mot de passe
        </label>

        <input type="password" id="password" value="1234" />

        <button
          type="button"
          onClick={async () => {
            var email = document.getElementById("username");
            var password = document.getElementById("password");
            let auth = {
              email: email.value,
              password: password.value,
            };
            console.log(auth);
            let url =
              "https://buycarwebservice-production.up.railway.app/auth/authenticate";
            let response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(auth),
            });
            response = await response.json();
            console.log(response);
            console.log("Token :"+response.token);
            if (response.status === "ok") {
              localStorage.setItem("Token", response.object.token);
              nav("/Accueil");
              // window.location.href = "/Annonce";
            } else {
              nav("/");

              // window.location.href = "/";
            }
          }}
          id="loginbtn"
        >
          Confirmer
        </button>

        {/* <button><a href="/Accueil">Log in</a></button> */}
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
