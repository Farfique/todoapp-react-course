import React from 'react';
import './todo-list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({label, important = false}) => {
const style = {
    color: important? 'steelblue' : 'black',
    fontWeight: important? 'bold' : 'normal'
}
    return (
        <span className="todo-list-item">
            <span 
                style={style}
                className="todo-list-item-label">
                { label }
            </span>
            <button 
                type="button"
                className="btn btn-outline-danger btn-sm">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button 
                type="button"
                className="btn btn-outline-success btn-sm">
                <FontAwesomeIcon icon={faExclamation} />
            </button>
        </span>
        
    );
};

export default TodoListItem;