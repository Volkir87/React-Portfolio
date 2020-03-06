import React from 'react';

function PortfolioItem(props) {
    return(
        <div className="project_box" id="weather_dash">
            <img src={props.img} className="project_image"/>
            <h3 className="project_name">{props.name}</h3>
            <p className="project_description">{props.desc}</p>
            <div className="button_group">
                <a className="link_ext" href={props.link_git}><i className="fa fa-window-maximize"></i> SITE</a>
                <a className="link_ext" href={props.link_app}><i className="fa fa-code"></i> CODE</a>
            </div>
        </div>
    )
}

export default PortfolioItem;