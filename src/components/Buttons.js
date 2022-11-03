import React, { Component } from 'react'
import Dislike from './buttons/Dislike/Dislike'
import Like from './buttons/Like/Like'

class Buttons extends Component {

  render() {
    return (
      <div className='buttons'>
        <Dislike onclick={this.props.handleSwipe} />
        <Like onclick={this.props.handleSwipe} />
      </div>
    )
  }
}

export default Buttons

