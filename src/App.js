import './App.css';
import React, { useState } from 'react'; 

function App() {
  const apiURL = "http://localhost:5001/generate"

  const[passwordLength, setPasswordLength] = useState(8);
  const[passwordAmount, setPasswordAmount] = useState(1);
  const[passwords, setPasswords] = useState([]);

  const handleReset = () => {
    setPasswordLength(8);
    setPasswordAmount(1);
  };
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let query_params = '?length='+passwordLength+'&amount='+passwordAmount;
      fetch(apiURL + query_params)
        .then(response => response.json())
        .then(json => json.map(p => p.password))
        .then(ps => setPasswords(ps))
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="App">
      <div className="api-form">
      <form onSubmit={handleSubmit}>
        <div className='passwordlength'>
          <label htmlFor="passwordLength">Password Length:</label>
          <input
            type="number"
            name="passwordLength"
            id="passwordLength"
            value={passwordLength}
            min="8"
            max="30"
            placeholder="8"
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div> 
        <div className='passwordAmount'>
          <label htmlFor="passwordAmount">Amount of Passwords:</label> 
          <input
            type="number"
            id = "passwordAmount"
            name="passwordAmount"
            value={passwordAmount}
            min="1"
            max="10"
            placeholder="1"
            onChange={(e) => setPasswordAmount(e.target.value)}
          />
        </div>
        <button type="submit">Generate Password</button>
        <button type="button" id="resetButton" onClick={handleReset}>Reset</button>
      </form>
      </div>
      <div className='passwords'>
        <table>
          <thead>
            <tr>
              {passwords.length === 0 ?"":<><th>Password</th><th>Value</th></>}
            </tr>
          </thead>
          <tbody>
            {passwords!=null? passwords.map((p, i) => <tr key={i}><td>{i+1}</td><td>{p}</td></tr>):null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;