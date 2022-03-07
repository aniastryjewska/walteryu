import React, {useState} from 'react';

export function NavBarMobile () {

    const [show, setMobileNavBar] = useState(false);


    return (
        <nav class="navbar navbar-light fixed-top d-sm-block d-md-none">
        <div class="container-fluid">
          <a href="https://www.instagram.com/lf_walter_yu/"><img className="inst-icon" src="instagram_logo.png"/></a>
          {/* <a href="mailto:mail@walteryu.de">mail@walteryu.de</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" 
          onClick={ ()=> {setMobileNavBar(true)}}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>   
    );
  }
  
  export default NavBarMobile;