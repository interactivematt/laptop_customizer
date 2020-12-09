import React, { Component } from 'react';
import FeatureItem from './FeatureItem'

class FeatureList extends Component {

  render() {
    const features = Object.keys(this.props.features).map(key => 
      <FeatureItem
        features={this.props.features}
        key={key}
        name={key}
        selected={this.props.selected}
        updateFeatures={this.props.updateFeatures}
      />
    );
    return(
      [features]
    )
  }
}

FeatureList.defaultProps = {
  features: {}
}

export default FeatureList;