import React from 'react';
import TodoItem from './listItem';
import store from './store';
import { observer } from "mobx-react";

const List = () => {
    const listItems = store.todoItems.map((item, index) =>
        <TodoItem
            key={String(item.id || "")}
            item={item}
            index={index}
            />
    );

    return (
        <>
            { Boolean(store.todoItems.length > 0) ?
                <ul className='list-wrapper'>
                    {listItems}
                    <div className='todo-footer'>
                        <div>{store.unfinishedCount} items left</div>
                        <div className='filter'>
                            <button onClick={() => store.filterTodoList('all')}>All</button>
                            <button onClick={() => store.filterTodoList('active')}>Active</button>
                            <button onClick={() => store.filterTodoList('completed')}>Completed</button>
                        </div>
                        {store.showButtonClearAll() ? <button onClick={store.clearCompleted}>Clear all</button> : ''}
                    </div>
                </ul> : null
            }
        </>
    );
}

export default observer(List);
