import React, { Fragment, Component } /*, { useEffect } */ from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HelmetProvider , Helmet} from 'react-helmet-async';
import './Banner.scss';

import Testimonials from './Testimonials';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: { x: 0, y: 0 },
            shadow: true,
            colors: [
                {
                    "background": "#1c2550",
                    "text": "#ffffff",
                    "bold": "#FCF751"
                }, {
                    "background": "#1c2550",
                    "text": "#ffffff",
                    "bold": "#FCF751"
                }],
            background: null,
            text: null,
            bold: null
        };
    }

    componentDidMount() {
        this.RandomBackground();
    }

    RandomBackground() {
        let getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let RandomID = getRandomInt(0, 1);

        this.setState({
            background: this.state.colors[RandomID].background,
            text: this.state.colors[RandomID].text,
            bold: this.state.colors[RandomID].bold
        })
    }

    render() {
        let history = createBrowserHistory();
        ReactGA.initialize('UA-180316702-1');
        history.listen((location, action) => {
            ReactGA.set({ page: location.pathname });
            ReactGA.pageview(location.pathname);
        });

        let sectionStyle = {
            backgroundColor: this.state.background,
            color: this.state.text
        }
        let boldStyle = {
            color: this.state.bold
        }
        const handleSubscription = (e) => {
            e.preventDefault();

            const params = new URLSearchParams();

            const subscriber = document.getElementById('subscriber').value;

            params.append('subscriber', subscriber);

            axios({
                method: "POST",
                url: "https://skillcurves.herokuapp.com/subscribe",
                // headers: {'Content-Type': 'application/json' },
                data: params
            }).then((response) => {
                console.log(response);
                if (response.data.msg === 'success') {
                    document.getElementById("alert").style.display = "block";
                    resetSubscriptionForm();
                } else if (response.data.msg === 'fail') {
                    alert("Not Subsribed")
                }
            })
        }

        const resetSubscriptionForm = () => {
            document.getElementById('subscription-form').reset();
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
                        <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Blog, Article, Finance, Stock Market"></meta>
                    </Helmet>
                </HelmetProvider>
                <section id="app" style={sectionStyle}>
                    <h1 className="middle">
                        Learning <span className="bold" style={boldStyle}>Skills</span> .
                        Leading <span className="bold" style={boldStyle}>Profits</span> .
                    </h1>
                </section>
                <div className="mainPage" history={history}>
                    <p>
                        Stock-centric skills never cease to exist. This basic investing skill is a permanent skill which was vital
                        100 years ago, as they are today and will still be 100 years from now. Join us in exploring an ocean
                    of opportunities in stock market.</p>
                    <p>
                        Our schooling may stop one day but learning must not. Learning never exhausts the mind. We live in
                        a world driven by financial markets. If we can learn even a little bit of how it works, we can give
                        ourselves a huge advantage. Getting to know about stock market from scratch is hard, but getting to
                        know it online is even harder.
                    </p>
                    <p>
                        SKILL CURVES is a passion project which aims to make best of the opportunities in financial market to
                        advance the cause of financial awareness for all. We are your one stop destination for all relevant
                        financial skills. To know how we can help you, connect with us.
                    </p>
                </div>
                <div className="newsletterLead">
                    <div className="newsletterBoxes">
                        <form method="POST" onSubmit={handleSubscription} id="subscription-form">
                            <label htmlFor="email">
                                Never miss what really matters in Stock Market. Stay informed by subscribing to our free weekly
                                newsletter which covers short summary of the week, technical &amp; derivative view, week ahead in a
                                short and plain language.
                            </label>
                            <div className="newsletterFields">
                                <input type="email" placeholder="Enter Your Email Here" name="subscriber" id="subscriber" />
                                <button type="submit" className="registerbtn">Subscribe</button>
                            </div>
                        </form>
                        <div className="alert success" id="alert">
                            <span id="closebtn" className="closebtn" onClick={closeAlert}>&times;</span>
                            <strong>Success!</strong> You are subscribed !!
                        </div>
                    </div>
                </div>
                <Testimonials/>
                <div className="footer">
                    <Link to="/termsandconditions">Terms and Conditions</Link>
                    <span> | </span>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    <span> | Copyright © 2020 skillcurves.com</span>
                </div>
            </Fragment>
        )
    }
}

export default Home;