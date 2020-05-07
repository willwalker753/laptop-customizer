import React, { Component } from 'react';
import '../App.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const feature = (this.props.feature);
const item = (this.props.item);

class FeatureRadio extends Component {
  render() {
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify({feature})}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature({feature, item})}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}
      
export default FeatureRadio;