import React from 'react'

export function NavBar () {
    return (
            <nav className="navbar d-flex flex-column p-5">
                <div className="navbar-menu navbar-nav d-none d-md-block">
                <div className="navbar-works">
                    <h3 className="navbar-item"><a className="navbar-item" href="/works"> works </a></h3>
                        <div id="navbar-works-dropdown">
                           <a className="navbar-item" href="/works/paintings"><h5>paintings</h5></a>
                            <a className="navbar-item" href="/works/drawings"><h5>drawings</h5></a>
                            <a className="navbar-item" href="/works/scrolls"><h5>scrolls</h5></a>
                            <a className="navbar-item" href="/works/sculptures"><h5>sculptures</h5></a>
                        </div>
                 </div>
                    <h3 className="navbar-item"><a className="navbar-item" href="/words">words</a></h3>
                    <h3 className="navbar-item"><a className="navbar-item" href="/present">present</a></h3>
                    <h3 className="navbar-item"><a className="navbar-item" href="/past">past</a></h3>
                </div> 
                <div className="d-flex stopka">
                <a href="https://www.instagram.com/lf_walter_yu/" className="navbar-email d-none d-md-block"><img className="inst-icon" src="instagram_logo.png" alt="instagram logo"/></a>
                <a href="mailto:mail@walteryu.de" className="navbar-email d-none d-md-block">mail@walteryu.de</a>
                </div>
            </nav>

    );
  }
  
  export default NavBar;