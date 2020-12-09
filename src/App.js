import React, { Component } from 'react';
import Title from './Title'
import FeatureList from './features/FeatureList'
import SummaryList from './summary/SummaryList'
import STORE from './STORE';

import './App.css';

class App extends Component {
  state = {store: STORE}
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  };

  updateFeatures = (itemsSelected, newValue) => {
    console.log(newValue)
    const selected = Object.assign({}, this.state.selected);
    selected[itemsSelected] = newValue;
    this.setState({
      selected
    });
  }


  render() {
    
    return (
      <div className="App">
        <Title/>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList
              features={this.props.store}
              selected={this.state.selected}
              updateFeatures={this.updateFeatures}
            />
            
          </form>
          <section className="main__summary">
            <SummaryList 
              features={this.props.features}
              selected={this.state.selected}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
