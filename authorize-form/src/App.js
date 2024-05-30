import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit() {
    const id = document.getElementById('username').value;
    const pw = document.getElementById('password').value;
    if (id === "admin" && pw === "123") {
      document.getElementById('message').innerHTML = "Correct User";
    } else {
      document.getElementById('message').innerHTML = "Incorrect User";
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300"/>
        <p>LOGIN</p>
        <input type='text' id='username' placeholder='ID' />
        <input type='password' id='password' placeholder='Password' />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <p id='message'></p>
      </header>
    </div>
  );
}

export default App;
