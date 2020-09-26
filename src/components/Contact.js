import React, { Fragment } /*, { useEffect } */ from 'react';
import axios from 'axios';

function Contact() {
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
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div class="alert success" id="alert">
                <span id="closebtn" class="closebtn" onClick={closeAlert}>&times;</span>
                <strong>Success!</strong> Your details have been sent
            </div>
            <div className="contactContainer">
                <div className="header">
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="row">
                    <div className="column">
                        <img src={require('../images/skillcurves contact.jpg')} alt="Skill Curves Contact" width="100%" height="auto" />
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
        </Fragment>
    );
}

export default Contact;