import React from 'react';
import store from './store';
import { observer } from "mobx-react";

const TodoItem = ({item, index}) => {
    return (
        <li className='list-item' id={item.id}>
            <div className='item-wrapper'>
                <input
                    type='checkbox'
                    className='input-item'
                    checked={item.complete}
                    onChange={() => store.completedTodo(item.id)}
                    />
                {
                    item.isEdit ?
                        <input
                            type='text'
                            value={item.itemValue}
                            name='editListValue'
                            onChange={(event) => store.getNewTodoValue(event.target.value, item.id)}
                            onKeyPress={(event) => store.addChangeItemValue(event, item.id)}
                            autoFocus/>
                        :
                        <label
                            className={`label-item ${(item.complete) ? 'item-complete' : ''}`}
                            onDoubleClick={() => store.editDoubleClick(item.id)}
                            >
                            {item.itemValue}
                        </label>
                }
                <button className='button-item' onClick={() => store.deleteTodoItem(index)}>x</button>
            </div>
        </li>
    );
}

export default observer(TodoItem);
