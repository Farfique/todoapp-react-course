import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render(){
        const {filter, onFilter} = this.props;
        
        let selectedClass = "btn-info";
        let secondaryClass = "btn-outline-secondary";

        let classAll = secondaryClass, 
            classActive = secondaryClass, 
            classDone  = secondaryClass;
        switch (filter) {
            case 'all': 
                classAll = selectedClass;
                break;
            case 'active':
                classActive = selectedClass;
                break;
            case 'done':
                classDone = selectedClass;
                break;
            default:
                classAll = selectedClass;                
        }

        return (
            <div className="btn-group">
                <button 
                    type="button" 
                    value="all"
                    onClick={onFilter}
                    className = { "btn " + classAll }>All</button>
                <button 
                    type="button" 
                    onClick={onFilter}
                    value="active"
                    className = { "btn " + classActive }>Active</button>
                <button 
                    type="button" 
                    onClick={onFilter}
                    value="done"
                    className = { "btn " + classDone }>Done</button>
            </div>
        );
    }
    
}