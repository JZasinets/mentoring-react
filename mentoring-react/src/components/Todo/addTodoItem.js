import React from 'react';
import { useCallback } from 'react';

const AddItem = React.memo(({ addTodoItem }) => {
    const editTodoList = useCallback(() => {
        return addTodoItem;
    }, [addTodoItem])

    return (
        <form onSubmit={editTodoList()}>
            <input type='text' name='itemListValue' className='todo-create' placeholder='What needs to be done?'/>
        </form>
    )
})

export default AddItem;
