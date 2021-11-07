import React, {useState} from 'react';
import PaintingModal from './PaintingModal';
import data from '../Data';


export function Paintings () {

     const [modal, setModal] = useState(false);
     const [tempData, setTempdata] = useState([]);
 
 
     const getData = (src, alt, id) => { 
       let tempData = [src, alt, id];
       setTempdata(scroll => [...tempData])
           console.log(tempData)
       return setModal(true);
     }

    return (
      
  <div className="container p-0">
  <div className="row pt-4 justify-content-center">
  {data.paintingData.map((scroll, index) => {
              return (
               <button key={index} className="btn btn-painting" onClick={()=> getData(scroll.src, scroll.alt, scroll.id)}><img className="work-image" src={scroll.src} alt="light-mountain" width="94%"/></button>
          )}
          )}
               { modal === true ? 
          <PaintingModal image={tempData[0]} alt={tempData[1]} hide={() => setModal(false)}/> : ''
            }
</div>
</div>
    );
  }
  
  export default Paintings;