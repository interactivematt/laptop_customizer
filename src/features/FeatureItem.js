import React, { Component } from 'react';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItem extends Component {

  render(){
    const feature = this.props.name
    const idx = 'idx'
    const featureHash = feature + '-' + idx;
    const { selected } = this.props;
    
    const options = this.props.features[feature].map(item => {
      const selectedClass = item.name === selected[this.props.name].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            value={itemHash}
            className={featureClass}
            name={slugify(feature)}
            checked={selected[this.props.name].name === item.name}
            onChange={e => {this.props.updateFeatures(this.props.name, item)} }
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
  };
}

FeatureItem.defaultProps ={
  features:{}
}

export default FeatureItem;