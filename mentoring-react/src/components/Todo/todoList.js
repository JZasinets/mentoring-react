import React from 'react';
import TodoItem from './listItem';
import store from './store';
import { observer } from "mobx-react";
import { useCallback } from 'react';

const List = () => {
    const listItems = store.getFilter.map((item, index) =>
        <TodoItem
            key={String(item.id || "")}
            item={item}
            index={index}
            />
    );

    const firstFilter = useCallback(() => {
        store.filterTodoList('all')
    }, [])

    const secondFilter = useCallback(() => {
        store.filterTodoList('active')
    }, [])

    const thirdFilter = useCallback(() => {
        store.filterTodoList('completed')
    }, [])

    return (
        <>
            { Boolean(store.todoItems.length > 0) ?
                <ul className='list-wrapper'>
                    {listItems}
                    <div className='todo-footer'>
                        <div>{store.unfinishedCount} items left</div>
                        <div className='filter'>
                            <button onClick={firstFilter}>All</button>
                            <button onClick={secondFilter}>Active</button>
                            <button onClick={thirdFilter}>Completed</button>
                        </div>
                        {store.showButtonClearAll() ? <button onClick={store.clearCompleted}>Clear all</button> : ''}
                    </div>
                </ul> : null
            }
        </>
    );
}

export default observer(List);
