import React, { Component } from 'react'
import '../SmallCardCommonStyles.css';
import './SmallCard1.css';

class SmallCard1 extends Component {
  render() {
    return (
        <div className={`${this.props.className} firstSmall`}></div>
    )
  }
}

export default SmallCard1