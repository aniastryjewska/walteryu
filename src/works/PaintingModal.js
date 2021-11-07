import React, {Component} from 'react';

export default class PaintingModal extends Component {
render() {
let modalStyle = {
    display: 'block',
    backgroundColor: 'rgb(255, 255, 255)',
    overflow: 'scroll',
}

let buttonStyle = {
  display: 'block',
  position: 'fixed',
  top: '10px',
  right: '10px',
}
    return (

<div className="modal show fade" style={modalStyle}>

      <button type="button" className="btn-close" onClick={this.props.hide} style={buttonStyle}></button>
      <div className="modal-body mt-4">
      <div className="container p-4">
      <div className="row">
      <div className="col-md-10">
      <img className="modal-painting-image" src={this.props.image} alt={this.props.alt}/>
      </div>
      <div className="col-md-2">
      <p>{this.props.alt}</p>
      </div>
      </div>
      </div>
      </div>
    </div>
 
    )
}
}