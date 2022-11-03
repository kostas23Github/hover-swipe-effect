import React, { Component } from 'react'
import './App.css';
import CardsContainer from './components/CardsContainer';
import Buttons from './components/Buttons';
import './components/CardsContainer.css';

class App extends Component {
  constructor(props) {
    super(props)
    // state of every container 
    this.state = {
      container1: 'visibleL',
      container2: 'hidden',
      container3: 'hidden',
      id: 1
    }

    this.handleSwipe = this.handleSwipe.bind(this);
  }
  // Computed variable
  handleSwipe = (action) => {
    const { id } = this.state;
    let containerLength = Object.keys(this.state).length - 1;
    switch (action) {
      case 'like':
        if (id < containerLength) {
          return this.setState({
            ...this.state,
            [`container${id}`]: 'hiddenR',
            [`container${id + 1}`]: 'visibleR',
            id: id + 1
          });
        } else if (id === containerLength) {
          return this.setState({
            ...this.state,
            [`container${id}`]: 'hiddenR',
            [`container${1}`]: 'visibleR',
            id: 1
          });
        }
        break;
      case 'dislike':
        if (id > 1) {
          return this.setState({
            ...this.state,
            [`container${id}`]: 'hiddenL',
            [`container${id - 1}`]: 'visibleL',
            id: id - 1
          });
        } else if (id === 1) {
          return this.setState({
            ...this.state,
            [`container${id}`]: 'hiddenL',
            [`container${containerLength}`]: 'visibleL',
            id: containerLength
          });
        }
        break;
      default:
        return this.setState({
          ...this.state
        })
    }
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <CardsContainer className='cards-container' statusone={this.state.container1} />
        <CardsContainer className='cards-container' statustwo={this.state.container2} />
        <CardsContainer className='cards-container' statusthree={this.state.container3} />
        <Buttons
          visibleId={this.state.id}
          handleSwipe={this.handleSwipe}
        />
      </>
    );
  }
}

export default App;
