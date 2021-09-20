import React from 'react';
import { useCallback } from 'react';

const TodoItem = React.memo(({value, complete, deleteTodoItem, editDoubleClick, isEdit, editTodoItem}) => {
    return (
        <li className='list-item'>
            <div className='item-wrapper'>
                <input
                    type="checkbox"
                    className='input-item'
                    checked={TodoItem.complete}
                    onChange={() => complete(this.TodoItem.item)}
                    />
                {
                    Boolean(isEdit) ?
                        <input value={value} name='editListValue' autoFocus/>
                        :
                        <label className='label-item' onDoubleClick={editDoubleClick}>{value}</label>
                }
                <button className='button-item' onClick={deleteTodoItem}>x</button>
            </div>
        </li>
    );
})

export default TodoItem;
