import React, { Component } from 'react';
import SummaryItem from './SummaryItem'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryList extends Component {
  render(){
    const selected = Object.keys(this.props.selected).map(key=>
      <SummaryItem
          selected = {this.props.selected}
          features={this.props.features}
          key = {key} 
          name= {key}
          />)
    const total = Object.keys(this.props.selected)
    .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            
            {selected}
            
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
        </section>
    )
  }
}

SummaryList.defaultProps = {
  selected:{},
  currentState:{},
}

export default SummaryList