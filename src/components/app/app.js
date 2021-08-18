import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';


const App = () => {

const data = [
  {label:"Drink Coffee", important: false, id: 1},
  {label:"Build React App", important: true, id: 2},
  {label:"Have a lunch", important: false, id: 3},  
]



  return (
    <div>
      <AppHeader />
      <div id="panel" className="block_margin">
        <SearchPanel />
        <ItemStatusFilter />
      </div>     
      <TodoList todos={data} onDeleted={(id) => console.log('del ', id)}/>
    </div>
);
};

export default App;