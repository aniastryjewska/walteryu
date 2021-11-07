import React, {Component} from 'react';

export default class Modal extends Component {
render() {
let modalStyle = {
    display: 'block',
    backgroundColor: 'rgb(255,255,255)',
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
      <img className="modal-scroll-image" src={this.props.image} alt={this.props.alt} width="auto"/>
      </div>
    </div>
 
    )
}
}