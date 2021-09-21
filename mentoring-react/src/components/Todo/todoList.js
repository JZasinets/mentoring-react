import React from 'react';
import TodoItem from './listItem';
import store from './store';

const List = React.memo(({todoItems}) => {
    const listItems = todoItems.map((item, index) =>
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
                            <button onClick={() => store.updateFilter('all')}>All</button>
                            <button onClick={() => store.updateFilter('active')}>Active</button>
                            <button onClick={() => store.updateFilter('completed')}>Completed</button>
                        </div>
                        {store.showButtonClearAll() ? <button onClick={store.clearCompleted}>Clear all</button> : ''}
                    </div>
                </ul> : null
            }
        </>
    );
})

export default List;
