import React, { Component } from 'react'
import '../buttonsCommonStyles.css'
import './Dislike.css'

class Dislike extends Component {
  render() {
    return (
        <span onClick={() => this.props.onclick('dislike')}className="material-symbols-outlined like">close</span>
    )
  }
}

export default Dislike