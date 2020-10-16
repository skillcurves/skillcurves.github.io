import React, { Fragment } /*, { useEffect } */ from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function Contact() {
    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();

        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const message = document.getElementById('subject').value;

        params.append('fname', fname);
        params.append('lname', lname);
        params.append('email', email);
        params.append('phonenumber', phonenumber);
        params.append('message', message);

        axios({
            method: "POST",
            url: "https://skillcurves.herokuapp.com/send",
            // headers: {'Content-Type': 'application/json' },
            data: params
        }).then((response) => {
            console.log(response);
            if (response.data.msg === 'success') {
                document.getElementById("alert").style.display = "block";
                resetForm();
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    const resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    const closeAlert = (e) => {
        const close = document.getElementById("closebtn");
        const div = close.parentElement;
        div.style.opacity = "0";
        setTimeout(function () { div.style.display = "none"; }, 600);
    }

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Contact Skill Curves"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Contact, Email, Newsletter"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="alert success" id="alert">
                <span id="closebtn" className="closebtn" onClick={closeAlert}>&times;</span>
                <strong>Success!</strong> Your details have been sent
            </div>
            <div className="contactContainer" history={history}>
                <div className="header">
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="contactCard">
                            <h3>Skill Curves</h3>
                            <hr />
                            <p>Shamya Prasa Building, Kinnigoli, Mangalore, 574150</p>
                            <p><strong>Ph:</strong> 8867316744</p>
                            <p><strong>Email:</strong> contact@skillcurves.com</p>
                        </div>
                    </div>
                    <div className="column">
                        <form method="POST" onSubmit={handleSubmit} id="contact-form">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email ID.." required />
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="text" id="phonenumber" name="phonenumber" placeholder="Your Phone Number.." />
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit" id="subject" />
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div> */}
        </Fragment>
    );
}

export default Contact;