import React from 'react';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryItem extends React.Component {
  render() {
    return(
      <div className="summary__option" key={this.props.name}>
        <div className="summary__option__label"> {this.props.name}  </div>
        <div className="summary__option__value"> {this.props.itemsSelected[this.props.name].name} </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.itemsSelected[this.props.name].cost)}
        </div>
      </div>
    )
  };
};

SummaryItem.defaultProps ={
  features:{},
  selected:{},

}

export default SummaryItem;
