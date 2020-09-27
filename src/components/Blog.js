import React, { Fragment , useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://skillcurves.herokuapp.com/blogarticles/?titlesOnly=Y')
            .then(response => response.json())
            .then(data => setArticles(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="bloglinks">
                {
                    articles?
                    articles.articles.map(article => 
                        <div key={article.slug} className="articleLink">
                            <Link to={"/"+article.slug} key={article.slug}>{article.title}</Link>
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
        </Fragment>
    );
}

export default Blog;