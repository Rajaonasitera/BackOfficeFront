import './login.css'
import user_icon from '../Assets/person.png'
import mdp_icon from '../Assets/password.png'

const Login = () => {

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

        <button type="button">
          Confirmer
        </button>
      </form>
    </div>
    )
}

export default Login