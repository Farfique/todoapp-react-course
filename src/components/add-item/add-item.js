import React from 'react';
import './add-item.css';

const AddItem = ({addItem}) => {
    return (
        <div className="add-item">
            <button className="btn btn-outline-secondary"
            onClick={() => addItem('Hello world')}
            id="addNewTask">Add</button>
        </div>

    )

}

export default AddItem;