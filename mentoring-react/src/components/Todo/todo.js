import React from 'react';
import List from './todoList';
import AddItem from './addTodoItem';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
        }
    }

    addTodoItem = (event) => {
        event.preventDefault();
        const itemValue = event.target.itemListValue.value;
        this.setState({
            todoItems: [...this.state.todoItems, itemValue],
        })
    }

    render () {
        return (
            <div className='todo'>
                <div className='todo-header'>todos</div>
                <div className='todo-list'>
                    <AddItem addTodoItem={this.addTodoItem}/>
                    <List todoItems={this.state.todoItems}/>
                </div>
            </div>
        )
    }
}

export default Todo;
