import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const abortController = new AbortController();
        const signal = abortController.signal;
        //http://localhost:5000
        fetch('https://skillcurves.herokuapp.com/blogarticles/?titlesOnly=Y', { signal: signal })
            .then(response => response.json())
            .then(data => setArticles(data));
        return function cleanup() {
            abortController.abort();
        }
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="bloglinks">
                {
                    articles ?
                        articles.articles.map(article =>
                            <div key={article.slug} className="articleLink">
                                <Link rel="preload" to={"/" + article.slug} key={article.slug}>{article.title}</Link>
                                <p>
                                    {article.description}
                                </p>
                                <p>
                                    {article.createdAt}
                                </p>
                            </div>
                        )
                        :
                        <h1>Loading...</h1>
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

export default Blog;