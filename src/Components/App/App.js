
import './App.css';
/*import Apple from '../../Images/Apple-logo.png';
import Google from '../../Images/Google-logo.png';*/

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Login-container">
          <div className="Login-header">
            Welcome Back to Teacher's Toolbox
          </div>
          <input className="Login-input" placeholder="Email" type="text"></input>
          <input className="Login-input" placeholder="Password" type="password"></input>
          <button className="Login-button" type="button">Login</button>
          <h2><span>or connect with</span></h2>
          <div className="Media-buttons">
            <button className="Media-button">Google</button>
            <button className="Media-button">Apple</button>
            <button className="Media-button">Facebook</button>
          </div>
        </div>
        <div className="Moving-container">
          <div className="Moving-header">Need an Account?</div>
          <button className="Moving-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
