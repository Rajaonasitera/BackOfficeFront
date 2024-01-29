import './login.css'
import user_icon from '../Assets/person.png'
import mdp_icon from '../Assets/password.png'



const Login = () => {
    // let [ok,setOk] = useState("ok");
    return(
    <div className="login-container">
      <h1>Login</h1>
      <form>
        
        <label htmlFor="username"><img src={user_icon} alt="X" width="10px"/> Identifiant</label>
        <input
          type="text"
          id="username"
        />

        <label htmlFor="password"><img src={mdp_icon} alt="X" width="10px"/> Mot de passe</label>
        
        <input
          type="password"
          id="password"
        />

        <button type="button" onClick={async ()=>{
          var email = document.getElementById('username');
          var password = document.getElementById('password');
            let auth = {
                "email" : email.value,
                "password" : password.value
            };
            console.log(auth);
            let url = 'https://webservicevoiture-production.up.railway.app/auth/authenticate';
            let response = await fetch(url,{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              }
              , body: JSON.stringify(auth)
            })
            response =await  response.json()
            console.log(response)
            if(response.status==="ok"){
                localStorage.setItem('Token',response.token);
                
                window.location.href='/Annonce';
            }else{
                window.location.href='/';
            }

            // var xhr = new XMLHttpRequest();
            // xhr.open('POST', url , true);
            // xhr.onload = function () {
            //   if (xhr.status >= 200 && xhr.status < 300) {
            //     // Succès de la requête
            //     var data = JSON.parse(xhr.responseText);
            //     localStorage.setItem('Token',data);
            //     window.location.href('/Accueil');
            //     console.log(data);
            //   } else {
            //     // Gestion des erreurs
            //     window.location.href('/');
            //     console.error('La requête a échoué avec un statut:', xhr.status);
            //   }
            // };
            // xhr.onerror = function () {
            //   // Gestion des erreurs
            //   console.error('Une erreur s\'est produite lors de la requête.');
            // };
            // xhr.send(auth);
        }} id='loginbtn'>
          Confirmer
        </button>

      
        {/* <button><a href="/Accueil">Log in</a></button> */}
      </form>
      
    </div>
    )
}

export default Login;
