import React from 'react';
import store from './store';
import { observer } from "mobx-react";
import { useCallback } from 'react';
import { useSpring, animated }from 'react-spring';

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

    const addGreenRectangle = () => {
        store.greenRecatangle();
    }

    return (
        <li className='list-item' id={item.id}>
            <animated.div className="green-rectangle" style={addGreenRectangle}></animated.div>
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
                <button className='button-item' onClick={addGreenRectangle}>✓</button>
                <button className='button-item' onClick={deleteTodoItemFunction}>x</button>
            </div>
        </li>
    );
}

export default observer(TodoItem);
