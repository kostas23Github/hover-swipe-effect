import React, { Component } from 'react'
import '../SmallCardCommonStyles.css';
import './SmallCard2.css';

class SmallCard2 extends Component {
  render() {
    return (
        <div className={`${this.props.className} secondSmall`}></div>
    )
  }
}

export default SmallCard2