import React from 'react';
import {useHistory} from 'react-router-dom';


export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="login">
      <h1 style={{ fontSize: "5rem" }}>HotSpot </h1>
      <div>
        <p style={{ fontSize: "2rem" }}className="quote">"Events for tonight and only tonight."</p>
      </div>
      <div>
        <form>
          <label style={{ fontSize: "2rem" }}>
            Username: <input type="text" />
          </label>
          <br />
          <label style={{ fontSize: "2rem" }}>
            Password: <input type="text" />
          </label>
        </form>

      </div>
      
      <button
        onClick={() => navigateToPage('/cHome')}
        className="page-button"
      >
        Login Personal
      </button>
      <button
        onClick={() => navigateToPage('/bHome')} 
        className="page-button"
      >
        Login Business
      </button>
      <button
        onClick={() => navigateToPage('/createAcc')} //need to talk to backend for create account page
        className="page-button"
      >
        Create Account
      </button>
    </div>
  );
};

