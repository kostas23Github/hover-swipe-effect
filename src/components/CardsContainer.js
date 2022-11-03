import React, { Component } from 'react'
import './CardsContainer.css';
import BigCard1 from './big-cards/BigCard1/BigCard1'
import BigCard2 from './big-cards/BigCard2/BigCard2'
import BigCard3 from './big-cards/BigCard3/BigCard3'
import BigCard4 from './big-cards/BigCard4/BigCard4'
import SmallCard1 from './small-cards/SmallCard1/SmallCard1'
import SmallCard2 from './small-cards/SmallCard2/SmallCard2'
import SmallCard3 from './small-cards/SmallCard3/SmallCard3'
import SmallCard4 from './small-cards/SmallCard4/SmallCard4'

// Wrapper/Container of all big cards
class CardsContainer extends Component {
  render() {
    return (
      <div
        className={`${this.props.className} ${this.props.statusone} ${this.props.statustwo} ${this.props.statusthree}`}
        statusone={this.props.statusone}
        statustwo={this.props.statustwo}
        statusthree={this.props.statusthree}
      >
        <SmallCard1 className='small-card' />
        <BigCard1 className='big-card' />
        <SmallCard2 className='small-card' />
        <BigCard2 className='big-card' />
        <SmallCard3 className='small-card' />
        <BigCard3 className='big-card' />
        <SmallCard4 className='small-card' />
        <BigCard4 className='big-card' />
      </div>
    )
  }
}

export default CardsContainer