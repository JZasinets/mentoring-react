import React from 'react';
import store from './store';

const TodoItem = React.memo(({item, index}) => {
    return (
        <li className='list-item' id={item.id}>
            <div className='item-wrapper'>
                <input
                    type="checkbox"
                    className='input-item'
                    checked={item.complete}
                    onChange={() => store.completedTodo(item.id)}
                    />
                {
                    store.isEdit ?
                        <input value={item.itemValue} name='editListValue' autoFocus/>
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
})

export default TodoItem;
