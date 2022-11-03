import React, { Component } from 'react'
import '../BigCardCommonStyles.css';
import './BigCard1.css';

class BigCard1 extends Component {
  render() {
    return (
      <div className={`${this.props.className} firstBig`}></div>
    )
  }
}

export default BigCard1