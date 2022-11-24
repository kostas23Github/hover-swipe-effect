import React, { Component } from 'react'
import '../buttonsCommonStyles.css'
import './Like.css'

class Like extends Component {
  componentDidMount() {
    document.querySelector('.like').addEventListener('click', () => this.props.onclick('like'))
  }
  componentWillUnmount() {
    document.querySelector('.like').removeEventListener('click', () => this.props.onclick('like'))
  }
  render() {
    return (
      <span
        // onClick={() => {
        //   this.props.onclick('like')
        // }}
        className="material-symbols-outlined like">
        thumb_up
      </span>
    )
  }
}

export default Like