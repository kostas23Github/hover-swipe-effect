import React, { Component } from 'react'
import './CardsContainer.css';
import BigCard from './big-cards/BigCard'
import SmallCard from './small-cards/SmallCard'

// Wrapper/Container of all big cards
class CardsContainer extends Component {
  // Each attr name: value is used to store each container's state (visibleL -> became visible from the left)  
  // The order attr is used to separate each SmallCard/BigCard components pair (order='one' is the first component of the container etc) 
  render() {
    return (
      <div
        className={`${this.props.className} ${this.props.statusone} ${this.props.statustwo} ${this.props.statusthree}`}
        statusone={this.props.statusone}
        statustwo={this.props.statustwo}
        statusthree={this.props.statusthree}
      >
        <SmallCard className='small-card' order='one' />
        <BigCard className='big-card' order='one' />
        <SmallCard className='small-card' order='two' />
        <BigCard className='big-card' order='two' />
        <SmallCard className='small-card' order='three' />
        <BigCard className='big-card' order='three' />
        <SmallCard className='small-card' order='four' />
        <BigCard className='big-card' order='four' />
      </div>
    )
  }
}

export default CardsContainer