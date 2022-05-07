import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './RSVP.css';

export default function RSVP() {
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
      <a href='/cHome'><h1>HotSpot </h1></a>
      <div>
        <form>
          <label>
            Number of Guests: <input type="text" />
          </label>
          <br />
          <label>
            Name of Guest: <input type="text" />
          </label>
          <br />
          <label>
            Date of Birth (MM/DD/YYYY): <input type="text" />
          </label>
          <br />
          <label>
            Phone Number: <input type="text" />
          </label>
          <br />
        </form>

      </div>


      <button
        onClick={() => navigateToPage('/confirmation')} //need to decide on page RSVP
        className="page-button"
      >
        RSVP
      </button>
      <button
        onClick={() => navigateToPage('/cHome')} //returns to homepage to continue scrolling
        className="page-button"
      >
        Cancel
      </button>
    </div>
  );
};
