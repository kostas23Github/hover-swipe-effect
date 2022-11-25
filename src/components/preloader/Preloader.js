import React, { Component } from 'react'
import './preloader.css'

class Preloader extends Component {

  hideLoader() {
    document.getElementById('preloader').style.display = 'none'
  }

  componentDidMount() {
    window.addEventListener('load', this.hideLoader)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.hideLoader)
  }

  render() {
    return (
      <div id='preloader'></div>
    )
  }
}

export default Preloader