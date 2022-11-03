import React, { Component } from 'react'
import './BigCard.css';

class BigCard extends Component {
  // className='big-card'
  // order='one' || 'two' etc...
  render() {
    return (
      <div 
      className={`${this.props.className}`} 
      order={this.props.order}
      ></div>
    )
  }
}

export default BigCard