import React from 'react';

const Item = React.memo(({value}) => {
    return (
        <li>
            {value}
        </li>
    );
})

export default Item;
