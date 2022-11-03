import React, { Component } from 'react'
import './SmallCard.css';

class SmallCard extends Component {
  // className='small card'
  //order='one' || 'two' etc...
  render() {
    return (
        <div className={`${this.props.className}`}
        order={this.props.order}
        ></div>
    )
  }
}

export default SmallCard