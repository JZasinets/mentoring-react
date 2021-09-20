import React from 'react';
import List from './todoList';
import AddItem from './addTodoItem';
import { observer } from "mobx-react";
import TodoStore from './store';

const store = new TodoStore();
const Todo = observer(class extends React.Component {
    render () {
        return (
            <div className='todo'>
                <div className='todo-header'>todos</div>
                <div className='todo-list'>
                    <AddItem addTodoItem={store.addTodoItem}/>
                    <List
                        todoItems={store.todoItems}
                        unfinishedCount={store.unfinishedCount}
                        complete={store.complete}
                        deleteTodoItem={store.deleteTodoItem}
                        editDoubleClick={store.editDoubleClick}
                        isEdit={store.isEdit}
                        />
                </div>
            </div>
        )
    }
})

export default Todo;
