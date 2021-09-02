import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  render(){
    let {onSearch} = this.props;
      return <input 
                type="text" 
                placeholder="search" 
                className="search-input"
                onChange={(event) => onSearch(event.target.value)}></input>;
  };
}
