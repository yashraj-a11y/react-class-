import './LoginStyle.css'

function Login() {
    return (
      <div className="container">
        <div>
          <label>Email</label>
          <input type="text" id="email" />
        </div>
  
        <div>
          <label>Password</label>
          <input type="text" id="password" />
        </div>
  
        <div>
          <button id="button-login">Login</button>
        </div>
      </div>
    );
  }
  

  
export default Login;