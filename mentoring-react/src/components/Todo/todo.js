import React from 'react';
import List from './todoList';
import AddItem from './addTodoItem';
import { observer } from "mobx-react";
import store from './store';

class Todo extends React.Component {
    render () {
        return (
            <div className='todo'>
                <div className='todo-header'>todos</div>
                <div className='todo-list'>
                    <AddItem />
                    <List todoItems={store.todoItems} />
                </div>
            </div>
        )
    }
}

export default observer(Todo);
