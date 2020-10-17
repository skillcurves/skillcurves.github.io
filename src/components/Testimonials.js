import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import './Testimonials.css';

function Testimonials() {
    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    // const options = { /*weekday: 'short',*/ year: 'numeric', month: 'short', day: 'numeric' };

    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const abortController = new AbortController();
        const signal = abortController.signal;
        //http://localhost:5000
        fetch('https://skillcurves.herokuapp.com/blogtestimonials', { signal: signal })
            .then(response => response.json())
            .then(data => setTestimonials(data));
        return function cleanup() {
            abortController.abort();
        }
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // eslint-disable-next-line
    }, []);

    let slideIndex = useRef(1);

    const plusSlides = (n) => {
        showSlides(slideIndex.current += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex.current = n);
    }

    const showSlides = useCallback((n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex.current = 1 }
        if (n < 1) { slideIndex.current = slides.length }

        if (slides.length > 0) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex.current - 1].style.display = "block";
        }
        if (dots.length > 0) {
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" testimonialactive", "");
            }
            dots[slideIndex.current - 1].className += " testimonialactive";
        }
    }, [slideIndex]);

    useEffect(() => {
        showSlides(slideIndex);
    }, [testimonials, showSlides, slideIndex]);

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Checkout Skill Curves Testimonials"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Testimonials, Life, Finance, Money"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="slideshow-container">
                {/* {testimonials ? testimonials.testimonials.length > 0 ? () => { showSlides(slideIndex) } : null : null} */}
                {
                    testimonials ?
                        testimonials.testimonials.map(testimonial =>
                            <div key={testimonial.slug} className="mySlides">
                                <q>{testimonial.testimonial}</q>
                                <p className="testimonialAuthor">
                                    <img alt={"Skillcurves "+ testimonial.authorName} src={testimonial.authorImageUrl} className="authorImg"/> 
                                    {testimonial.title}
                                </p>
                            </div>
                        )
                        :
                        <div className="loader"></div>
                }
                <span className="prev" onClick={() => plusSlides(-1)}>❮</span>
                <span className="next" onClick={() => plusSlides(1)}>❯</span>
            </div>
            <div className="dot-container">
                {
                    testimonials ?
                        testimonials.testimonials.map((testimonial, index) => 
                            <span key={testimonial.slug} className="dot" onClick={() => currentSlide(index+1)}></span>
                            )
                        : null
                }
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

export default Testimonials;