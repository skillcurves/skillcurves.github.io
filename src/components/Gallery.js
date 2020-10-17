import React, { useState, Fragment } /*, { useEffect } */ from 'react';
// import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ImageGallery from 'react-image-gallery';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function Gallery() {
    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    const [images, setImages] = useState(null);    

    fetch(`Gallery.json`)
        .then((r) => r.json())
        .then((data) => {
            setImages(data.gallery);
        });

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Skill Curves | Image Gallery </title>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Know more about Skill Curves and Karthekeya Udupa"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Image Gallery, Blog, Finance, Stock Market"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            {
                images
                    ?
                    <div>
                    <ImageGallery items={images}
                        showThumbnails={false}
                        lazyLoad = {true}
                    />
                    {/* <img src={require("./gallery/1.jpg")} alt="skill curves"/> */}
                    </div>
                    :
                    <div className="loader"></div>
            }
            {/* <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div> */}
        </Fragment>
    );
}

export default Gallery;