import React, { Component } from 'react';
import './todo-list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default class TodoListItem extends Component {
    
    render(){
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        
        if (done){
            classNames += ' done';
        }

        if (important){
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
                <span 
                    onClick={ onToggleDone }
                    className="todo-list-item-label">
                    { label }
                </span>
                <button 
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button 
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={ onToggleImportant }>
                    <FontAwesomeIcon icon={faExclamation} />
                </button>
            </span>
            
        );
    }
}