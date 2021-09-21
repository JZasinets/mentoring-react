import React from 'react';
import store from './store';

const AddItem = React.memo(() => {
    return (
        <form onSubmit={store.addTodoItem}>
            <input type='text' name='itemListValue' className='todo-create' placeholder='What needs to be done?'/>
        </form>
    )
})

export default AddItem;
