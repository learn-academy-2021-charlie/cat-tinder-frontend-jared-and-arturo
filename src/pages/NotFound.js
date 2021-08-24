import React, { Component } from 'react';
import NotFoundImg from '../assets/404.jpg'

class NotFound extends Component {
  render() {
    return (
      <div id='404img'>
      <img src={NotFoundImg} alt= "404 message" width="1500px" height="1200px"
/>
      </ div>
    )
  }
}


export default NotFound;
