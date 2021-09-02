import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    
    render(){       
        const {filter, onFilter} = this.props;

        
        const buttons = this.buttons.map(({name, label}) => {
            let btnClass = filter === name? "btn-info" : "btn-outline-secondary";
            return (
                <button 
                    type="button" 
                    value={ name }
                    key= { name }
                    onClick={ (event) => onFilter(name) }
                    className = { `btn  ${btnClass}` }>{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
    
}