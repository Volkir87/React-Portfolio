import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio({allPrj}) {
    console.log('allPrj: ', allPrj);
    const [allProjects, setProjects] = useState({});
    console.log('allProjects: ', allProjects);
    useEffect(() => {
        setProjects(allPrj);
    }, [allPrj]);
    //console.log(allProjects);
    return(
    <div className="portfolio">
        <h2 className="info_header" id="portfolio">Portfolio</h2>
        <div id="all_projects">
            {(allProjects!==undefined && allProjects.length>0) ? allProjects.map((v, i) => {
                return <PortfolioItem name={v.name} img={v.img} link_git={v.link_git} link_app={v.link_app} desc={v.desc}/>
            }) : <span>No items found</span>}
        </div>
    </div>
    )
}

export default Portfolio;