import React, { Component } from 'react'
import '../SmallCardCommonStyles.css';
import './SmallCard3.css';

class SmallCard3 extends Component {
  render() {
    return (
        <div className={`${this.props.className} thirdSmall`}></div>
    )
  }
}

export default SmallCard3