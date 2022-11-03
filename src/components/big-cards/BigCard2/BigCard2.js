import React, { Component } from 'react'
import '../BigCardCommonStyles.css';
import './BigCard2.css';

class BigCard2 extends Component {
  render() {
    return (
      <div className={`${this.props.className} secondBig`}></div>
    )
  }
}

export default BigCard2