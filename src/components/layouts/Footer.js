import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
          <div className="footer-wrapper">
              <div className="created-by">
                  I built this site using <b>Javascript</b> and <b>React.</b> You can find the source code <a href="https://github.com/sabinabialic/my-website">here</a> ❤
              </div>
              <div className="blue-line">
              </div>
          </div >
        )
    }
}
