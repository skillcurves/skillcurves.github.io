import React, { Fragment } /*, { useEffect } */ from 'react';

function Blog() {
    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <h1 className="comingSoon">Coming Soon</h1>
        </Fragment>
    );
}

export default Blog;