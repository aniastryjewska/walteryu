import React, {useState} from 'react';
import Modal from './ScrollModal';
import data from '../../src/Data';
 
export function Scrolls () {



    const [modal, setModal] = useState(false);
    const [tempData, setTempdata] = useState([]);


    const getData = (src, alt, id) => { 
      let tempData = [src, alt, id];
      setTempdata(scroll => [...tempData])
          console.log(tempData)
      return setModal(true);
    }
    
    return (
     
        <div>
         
         <section className="container p-4 scroll-section">
         {data.scrollData.map((scroll, index) => {
              return (
        <div className="row" key={index}>
               <button className="btn" onClick={()=> getData(scroll.src, scroll.alt, scroll.id)}><img className="work-image scroll" src={scroll.src} alt="light-mountain" /></button>
         </div>
          )}
          )};
          </section>
         <section>
               { modal === true ? 
          <Modal image={tempData[0]} alt={tempData[1]} hide={() => setModal(false)}/> : ''
            }
         </section>

          
       </div>


    );
  }
  
  export default Scrolls;