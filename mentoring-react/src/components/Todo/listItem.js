import React from 'react';
import store from './store';

const TodoItem = React.memo(({value, index}) => {
    return (
        <li className='list-item'>
            <div className='item-wrapper'>
                <input
                    type="checkbox"
                    className='input-item'
                    checked={TodoItem.complete}
                    onChange={() => store.complete(this.TodoItem.item)}
                    />
                {
                    store.isEdit ?
                        <input value={value} name='editListValue' autoFocus/>
                        :
                        <label className='label-item' onDoubleClick={() => store.editDoubleClick(index)}>{value}</label>
                }
                <button className='button-item' onClick={() => store.deleteTodoItem(index)}>x</button>
            </div>
        </li>
    );
})

export default TodoItem;
