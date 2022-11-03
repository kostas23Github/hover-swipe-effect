import React, { Component } from 'react'
import '../buttonsCommonStyles.css'
import './Like.css'

class Like extends Component {
  render() {
    return (
      <span
        onClick={() => {
          this.props.onclick('like')
        }}
        className="material-symbols-outlined like">
        thumb_up
      </span>
    )
  }
}

export default Like