import React from 'react';
import './App.css';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItem extends React.Component {
  render() {
    const options = this.props.features[this.props.name].map((item, index) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={index} className="feature__item">
          <input 
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.name)}
          />
          <label htmlFor={itemHash} className="feature__label">
              {item.name} 
              ({USCurrencyFormat.format(item.cost)})
            </label>
        </div>
      )
    });
    
    return(
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {options}
      </fieldset>
        
    )
  };
};

FeatureItem.defaultProps ={
  features:{},
  selected:{},

}

export default FeatureItem;
