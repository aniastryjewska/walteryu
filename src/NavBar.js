import React from 'react'

export function NavBar () {
    return (
      
<nav className="navbar d-flex flex-column p-5">
           
                <div className="navbar-menu navbar-nav">
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
                <a href="mailto:mail@walteryu.de" className="navbar-email">mail@walteryu.de</a>
            </nav>

    );
  }
  
  export default NavBar;