import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 


export function Home () {
    return (
      
  <div className="container p-4">
  <Carousel fade indicators={false} controls={false}>  

 <Carousel.Item>  
           <img className="d-block w-100" src="Light-mountain.png"/>  
 </Carousel.Item>  
<Carousel.Item>  
          <img className="d-block w-100" src="12.jpg" />  
</Carousel.Item>  
<Carousel.Item>  
          <img className="d-block w-100" src="3.jpg" />  
</Carousel.Item>  
<Carousel.Item>  
          <img className="d-block w-100" src="walteryu4.png" />  
</Carousel.Item>  
<Carousel.Item>  
          <img className="d-block w-100" src="walteryu2.png" />  
</Carousel.Item>  
 </Carousel>  

 </div>


    );
  }
  
  export default Home;