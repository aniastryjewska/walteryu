import React from 'react'

export function Works () {
    return (
      
<div>
    <div class="p-3">
            <div class="d-flex">
                    <h4 class="p-4 nav-bar"><a class="nav-bar" href="/works"> works </a></h4>
                    <h4 class="p-4 nav-bar"><a class="nav-bar" href="/words">words</a></h4>
                    <h4 class="p-4 nav-bar"><a class="nav-bar" href="/present">present</a></h4>
                    <h4 class="p-4 nav-bar"><a class="nav-bar" href="/past">past</a></h4>
            </div> 
    </div> 
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="walteryu1.png" class="d-block w-100" alt="walteryu1"/>
    </div>
    <div class="carousel-item active">
      <img src="walteryu2.png" class="d-block w-100" alt="walteryu2"/>
    </div>
    <div class="carousel-item">
      <img src="baby_yuu.png" class="d-block w-100" alt="walteryu2"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
  }
  
  export default Works;