//import fs from 'fs';

//const fs = require('fs');

export default {
    getAll: async function(){
        //let rawData = await fs.readFile('./projects.json');
        //let allProjects = JSON.parse(rawData);
        //return allProjects;
        return {
            "allProjects": [
                {
                    "name": "Weather Dashboard",
                    "desc": "A simple dashboard to get the weather info for various cities in the world, built with jQuery and Bootstrap",
                    "link_git": "https://github.com/Volkir87/Weather-Dashboard",
                    "link_app": "https://volkir87.github.io/Weather-Dashboard/",
                    "img": "./assets/images/Weather-Dashboard-screenshot_sq.png"
                },
                {
                    "name": "Day Planner",
                    "desc": "A simple planner app to track your daily routines, built with jQuery",
                    "link_git": "https://github.com/Volkir87/Day-Planner",
                    "link_app": "https://volkir87.github.io/Day-Planner/",
                    "img": "./assets/images/Day_Planner_Screenshot_sq.png"
                },
                {
                    "name": "Nounify",
                    "desc": "A fun project making any text more alive by searching images for various words in the text, built with jQuery",
                    "link_git": "https://github.com/ninjagirl2018/Nounify",
                    "link_app": "https://ninjagirl2018.github.io/Nounify/",
                    "img": "./assets/images/Nounify_screenshot_sq.png"
                },
                {
                    "name": "Employee-Summary",
                    "desc": "This CLI application generates and saves an html file based on the user input",
                    "link_git": "https://github.com/Volkir87/Employee-Summary",
                    "link_app": "#",
                    "img": "./assets/images/Employee_Summary_screenshot.png"
                },
                {
                    "name": "Employee-Management",
                    "desc": "A small CLI Express app using MySQL to keep track of employee records at an organization",
                    "link_git": "https://github.com/Volkir87/Employee-Management",
                    "link_app": "#",
                    "img": "./assets/images/Employee-Management.PNG"
                },
                {
                    "name": "BuckEATlist",
                    "desc": "An application to save the restaurants you ever wanted to visit in the bucketlist, so that you never forget where you wanted to go. Built with Express Handlebars",
                    "link_git": "https://github.com/davidgeht/BuckEATlist",
                    "link_app": "https://buckeatlist.herokuapp.com",
                    "img": "./assets/images/Buckeatlist_screenshot.png"
                }
            ]
        }
    }
};