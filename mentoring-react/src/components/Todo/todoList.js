import React from 'react';
import TodoItem from './listItem'

const List = React.memo(({ todoItems, unfinishedCount, complete, deleteTodoItem, editDoubleClick, isEdit }) => {
    const listItems = todoItems.map((item, index) =>
        <TodoItem
            key={String(item || "")}
            value={item}
            deleteTodoItem={() => deleteTodoItem(index)}
            editDoubleClick={() => editDoubleClick(index)}
            isEdit={isEdit}
            complete={complete}
            />
    );

    return (
        <>
            { Boolean(todoItems.length > 0) ?
                <ul className='list-wrapper'>
                    {listItems}
                    <div className='todo-footer'>
                        <div>{unfinishedCount} items left</div>
                    </div>
                </ul> : null
            }
        </>
    );
})

export default List;
