import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';

export default class App extends Component {
    maxId = 100;

    createTodoItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    state = {
        data: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Build React App"),
            this.createTodoItem("Have a lunch"),  
          ],
        search: '',
        filter: 'all'
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
            const obj = this.createTodoItem(text);
            const newArr = [...data, obj];
            return {
                data: newArr
            }
        });
    };

    toggleProperty = (arr, id, propName) => {
        const indx = arr.findIndex((el) => el.id === id);
        const newItem = { ...arr[indx], [propName]: !arr[indx][propName] };
        return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {           
            return {
                data: this.toggleProperty(data, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, 'done')
            }
        });
    };

    search = (text) => {
        this.setState({
            search: text
        })
    }

    filter = (value) => {
        this.setState({
            filter: value
        })
    }

    showFiltered(){
        return this.state.data.filter((item) => {
            let filter = (this.state.filter === 'all') || (this.state.filter === 'done' && item.done) || (this.state.filter === 'active' && !item.done)
            return item.label.toLowerCase().includes(this.state.search.toLowerCase()) && filter;
        })
    }

    render() {
        const doneCount = this.state.data.filter((el) => el.done).length;
        const todoCount = this.state.data.length - doneCount;

        return (
            <div>
              <AppHeader toDo={ todoCount } done={ doneCount }/>
              <div id="panel" className="block_margin">
                <SearchPanel 
                    onSearch={this.search}/>
                <ItemStatusFilter 
                    filter={ this.state.filter }
                    onFilter = { this.filter } />
              </div>     
              <TodoList 
                todos={this.showFiltered()} 
                onDeleted={(id) => this.deleteItem(id)}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
              <AddItem 
              addItem={this.addItem}/>
            </div>
        );
    }
}

