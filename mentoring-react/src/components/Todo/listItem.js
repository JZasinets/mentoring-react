import React from 'react';
import store from './store';
import { observer } from "mobx-react";

const TodoItem = ({item, index}) => {
    const completedTodoItem = () => {
        store.completedTodo(item.id)
    }

    const newTodoValue = (event) => {
        store.getNewTodoValue(event.target.value, item.id)
    }

    const addKeyPress = (event) => {
        store.addChangeItemValue(event, item.id)
    }

    const doubleClickFunction = () => {
        store.editDoubleClick(item.id)
    }

    const deleteTodoItemFunction = () => {
        store.deleteTodoItem(index)
    }

    return (
        <li className='list-item' id={item.id}>
            <div className='item-wrapper'>
                <input
                    type='checkbox'
                    className='input-item'
                    checked={item.complete}
                    onChange={completedTodoItem}
                    />
                {
                    item.isEdit ?
                        <input
                            type='text'
                            value={item.itemValue}
                            name='editListValue'
                            onChange={newTodoValue}
                            onKeyPress={addKeyPress}
                            autoFocus/>
                        :
                        <label
                            className={`label-item ${(item.complete) ? 'item-complete' : ''}`}
                            onDoubleClick={doubleClickFunction}
                            >
                            {item.itemValue}
                        </label>
                }
                <button className='button-item' onClick={deleteTodoItemFunction}>x</button>
            </div>
        </li>
    );
}

export default observer(TodoItem);
