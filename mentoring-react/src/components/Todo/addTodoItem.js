import React from 'react';
import store from './store';
import { observer } from "mobx-react";

const AddItem = () => {
    return (
        <div className='todo-input'>
            <button className='button-all' onClick={store.completedAll}>✓</button>
            <form className='form-input' onSubmit={store.addTodoItem}>
                <input type='text' name='itemListValue' className='todo-create' placeholder='What needs to be done?'/>
            </form>
        </div>
    )
}

export default observer(AddItem);
