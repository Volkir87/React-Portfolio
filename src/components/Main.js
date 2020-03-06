import React from 'react';

function Main() {
    return(
        <div id="first_page">
        <div className="top">
            <nav className="links">
                <a className="link" href="#about_me">About</a>
                <a className="link" href="#portfolio">Portfolio</a>
                <a className="link" href="#contact">Contact</a>
            </nav>
        </div>
        <div id="image_container">
            <img id="portfolio_image" src="./assets/images/Portfolio_pic.JPG"/>
        </div>
        <div id="title">
            <h1 id="name">Kirill Volodkin</h1>
            <h2 id="subtitle">Application Developer</h2>
        </div>
    </div>
    )
}

export default Main;