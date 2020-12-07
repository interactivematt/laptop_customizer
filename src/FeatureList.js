import React from 'react';
import FeatureItem from './FeatureItem';
import './App.css';

class FeatureList extends React.Component {
  render() {
    const list = Object.keys(this.props.features).map(key => 
      <FeatureItem 
        features={this.props.features} 
        key={key}
        name={key}
      />
    );
    return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <div className="feature_list">
        {list}
      </div>
    </form>
    ); 
  } 
}

FeatureList.defaultProps = {
  features: []
}

export default FeatureList;