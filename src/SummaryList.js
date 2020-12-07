import React from 'react'
import SummaryItem from './SummaryItem.js'
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class SummaryList extends React.Component{
  render() {
    const list = Object.keys(this.props.features).map(key => 
      <SummaryItem
        features={this.props.features} 
        key={key}
        name={key}
      />
    );
    
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {list}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format()}
          </div>
        </div>
      </section>
    ); 
  } 
}

SummaryList.defaultProps = {
  features: []
}

export default SummaryList;