import React from 'react';
import store from './store';
import { observer } from "mobx-react";
import { useCallback } from 'react';

const TodoItem = ({item, index}) => {
    const completedTodoItem = useCallback(() => {
        store.completedTodo(item.id)
    }, [])

    const newTodoValue = useCallback((event) => {
        store.getNewTodoValue(event.target.value, item.id)
    }, [])

    const addKeyPress = useCallback((event) => {
        store.addChangeItemValue(event, item.id)
    }, [])

    const doubleClickFunction = useCallback(() => {
        store.editDoubleClick(item.id)
    }, [])

    const deleteTodoItemFunction = useCallback(() => {
        store.deleteTodoItem(index)
    }, [])

    const getRectangle = () => {
        store.showRectangle(item.id);
    }

    return (
        <li className={`list-item ${item.visibleRectangle === true ? 'check': ''}`} id={item.id}>
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
                <button className='button-item' onClick={getRectangle}>✓</button>
                <button className='button-item' onClick={deleteTodoItemFunction}>x</button>
            </div>
        </li>
    );
}

export default observer(TodoItem);
