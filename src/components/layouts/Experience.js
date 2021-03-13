import React, { Component } from 'react';
import './Experience.css';
import esdcLogo from '../../assets/images/esdc.png';
import virtamoveLogo from '../../assets/images/virtamove.png';
import healthcanadaLogo from '../../assets/images/healthcanada.png';

export default class Experience extends Component {
    render() {
        return (
            <div id="experience" className="experience-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="experience-title">
                                Experience
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                        <div className="col-md-6">
                            <div className="card company-esdc">
                                <img src={esdcLogo} alt="ESDC" className="company-image-esdc" />
                                <div className="overlay-esdc">
                                    <div className="company-desc text-black">
                                        <h4>ESDC | EDSC</h4>
                                        <h5>Developer Co-op</h5>
                                        <p>
                                            January 2020 - Present<br></br>
                                            Gatineau, Canada
                                        </p>

                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="row top-margin-5">
                        <div className="col-md-6">
                            <div className="card company-virtamove">
                                <img src={virtamoveLogo} alt="VirtaMove" className="company-image-virtamove" />
                                <div className="overlay-virtamove">
                                    <div className="company-desc text-black">
                                        <h4>VirtaMove</h4>
                                        <h5>Software Developer Co-op</h5>
                                        <p>
                                            May 2019 - September 2019<br></br>
                                            Ottawa, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row top-margin-5">
                        <div className="col-md-6">
                            <div className="card company-healthcanada">
                                <img src={healthcanadaLogo} alt="Health Canada" className="company-image-healthcanada" />
                                <div className="overlay-healthcanada">
                                    <div className="company-desc text-black">
                                        <h4>Health Canada | Santé Canada</h4>
                                        <h5>Business Analyst Co-op</h5>
                                        <p>
                                            January 2018 - May 2019<br></br>
                                            Ottawa, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
