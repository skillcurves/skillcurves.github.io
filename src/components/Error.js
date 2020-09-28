import React, { Fragment } /*, { useEffect } */ from 'react';
// import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    return (
        <Fragment>
            <div className="error">
                <a href="/">
                    <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
                </a>
                <div className="mainbox">
                    <div className="err">4</div>
                    <i className="far fa-question-circle fa-spin"></i>
                    <div className="err2">4</div>
                    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
                </div>
            </div>
            {/* <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privact Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div> */}
        </Fragment>
    );
}

export default Error;