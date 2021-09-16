import React from 'react';
import Item from './listItem'

const List = React.memo(({ todoItems }) => {
    const listItems = todoItems.map((item) =>
        <Item key={item.toString()} value={item} />
    );

    return (
        <>
            { Boolean(todoItems.length > 0) ?
                <ul className='list-wrapper'>
                    {listItems}
                </ul> : null
            }
        </>
    );
})

export default List;
