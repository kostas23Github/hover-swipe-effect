import React, { Component } from 'react'
import '../buttonsCommonStyles.css'
import './Like.css'

class Like extends Component {
  render() {
    return (
      <span
        onClick={() => {
          // e.preventDefault()
          this.props.onclick('like')
        }}
        className="material-symbols-outlined like">
        favorite
      </span>
    )
  }
}

export default Like