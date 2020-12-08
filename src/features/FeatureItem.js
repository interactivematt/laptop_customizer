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
    const selected = this.props.selected
    console.log(feature)

    const options = this.props.features[feature].map((item, index) => {
      // const selectedClass = item.name === selected[this.props.name].name ? 'feature__selected' : '';
      //const featureClass = 'feature__option ' + selectedClass;
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            // checked={item.name === this.state.selected[feature].name}
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
  };
}

FeatureItem.defaultProps ={
  features:{}
}

export default FeatureItem;