import React, { Fragment } /*, { useEffect } */ from 'react';

function Contact() {
    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
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
                        <form action="/action_page.php">
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
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;