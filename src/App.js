import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList'
import SummaryList from './SummaryList'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
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
  }

  updateFeature(itemsSelected, newValue) {
    
    console.log(`updating features`)
    const selected = Object.assign({}, itemsSelected);
    selected[itemsSelected] = newValue;
    this.setState({
      selected
    });
  }

  updateSummary = (selectedItems) =>{
    console.log(`updating summary`)
    Object.keys(selectedItems).map(key=>
      <div className="summary__option" key= {key}>
        <div className="summary__option__label"> {key}  </div>
        <div className="summary__option__value"> {selectedItems[key].name} </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(selectedItems[key].cost) }
        </div>
      </div>)
  }

  updateTotal = (selectedItems) =>{
    console.log(`updating total`)
    if(!selectedItems){
      selectedItems=this.state.selected
    }
    Object.keys(selectedItems)
          .reduce((acc, curr) => acc + selectedItems[curr].cost, 0); 
  }

  updateSelectedFeatures = (features, itemsSelected) =>{
    console.log(`updating selected features`)

    Object.keys(features)
          .map(key => {
            const options = features[key].map((item, index) => {
              const selectedClass = item.name === itemsSelected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key= {index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.handleUpdateSummary(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureList 
            itemsSelected = {this.state.selected}
            features = {this.props.features}
            handleUpdateSelectedFeatures = { (features, itemsSelected)=>this.updateSelectedFeatures(this.props.features, this.state.selected)}
            handleUpdateSummary ={(itemsSelected)=> this.updateFeature(itemsSelected)}
          />
          <SummaryList 
            features={this.props.features}
            itemsSelected = {this.state.selected}
          />
        </main>
      </div>
    );
  }
}
  



/*
class App extends Component {
  state = STORE;

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

*/

export default App;
