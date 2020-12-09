import React, { Component } from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryItem extends Component {
  render(){
    return(
      <div className="summary__option" key={this.props.name}>
        <div className="summary__option__label"> {this.props.name}  </div>
        <div className="summary__option__value"> {this.props.selected[this.props.name].name} </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selected[this.props.name].cost)}
        </div>
      </div>
    )
  }
}

export default SummaryItem