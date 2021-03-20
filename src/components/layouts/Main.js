import React, { Component } from 'react';
import './Main.css';
import art from '../../assets/images/dp.jpg';

export default class MainPage extends Component {
  render() {
    return (
      <div id="main" className="main-wrapper">
        <div className="container">
          <div className="table align-items-center">
            <div className="table-cell">
              <div className="banner-content slide-in-blurred-left">
                <h1>Welcome! <span role="img" aria-label="Hand">👋</span></h1>
                <p>
                  My name is <b>Sabina Bialic</b> and I am a <b>fourth year </b>
                  Computer Science student at Carleton University. As I work to
                  complete my BSc, I am currently working as a developer at ESDC
                  in Gatineau, Canada.
                  </p>
              </div>
            </div>
            <div className="table-cell slide-in-blurred-bottom">
                <img src={art} className='me' alt="loading..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
