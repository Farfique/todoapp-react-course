import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';

export default class App extends Component {
    state = {
        data: [
            {label:"Drink Coffee", important: false, id: 1},
            {label:"Build React App", important: true, id: 2},
            {label:"Have a lunch", important: false, id: 3},  
          ]
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const indx = data.findIndex((el) => el.id === id);
            const arr = [...data.slice(0, indx), ...data.slice(indx + 1)];
            return {
                data: arr
            }
        });
    };
    addItem = (text) => {
        this.setState(({data}) => {
            const obj = {label: text, important: false, id: data.length + 1};
            const newArr = [...data, obj];
            return {
                data: newArr
            }
        });
    };

    render() {
        return (
            <div>
              <AppHeader />
              <div id="panel" className="block_margin">
                <SearchPanel />
                <ItemStatusFilter />
              </div>     
              <TodoList todos={this.state.data} onDeleted={(id) => this.deleteItem(id)}/>
              <AddItem 
              addItem={this.addItem}/>
            </div>
        );
    }
}

