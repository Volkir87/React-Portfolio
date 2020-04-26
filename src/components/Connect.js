import React from 'react';

function Connect() {
    return(
        <div className="contact">
            <h2 className="info_header" id="contact">Contact</h2>
            <div className="contact_box">
                <a href="mailto:kirvolod@gmail.com" className="email">kirvolod@gmail.com</a>
                <br></br>
                <div className="contact_buttons">
                    <a href="https://github.com/Volkir87" className="link_ext cont_but">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kirillvolodkin/" className="link_ext cont_but">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="./assets/files/Kirill Volodkin.pdf" className="link_ext cont_but" download>
                        <i className="far fa-file"></i> Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Connect;