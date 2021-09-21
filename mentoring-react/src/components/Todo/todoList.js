import React from 'react';
import TodoItem from './listItem';
import store from './store';

const List = React.memo(({todoItems}) => {
    const listItems = todoItems.map((item, index) =>
        <TodoItem
            key={String(item || "")}
            value={item}
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
                    </div>
                </ul> : null
            }
        </>
    );
})

export default List;
