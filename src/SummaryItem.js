import React from 'react';
import './App.css';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryItem extends React.Component {
  render() {
    const options = this.props.features[this.props.name].map((item, index) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div className="summary__option" key={index}>
          <div className="summary__option__label">{item.name}</div>
          <div className="summary__option__value">{item.cost}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(this.props.cost)}
          </div>
        </div>
      )
    });
    
    return(
        options
    )
  };
};

SummaryItem.defaultProps ={
  features:{},
  selected:{},

}

export default SummaryItem;
