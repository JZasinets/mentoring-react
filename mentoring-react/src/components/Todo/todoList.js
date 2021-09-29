import React from 'react';
import TodoItem from './listItem';
import store from './store';
import { observer } from "mobx-react";
import { useCallback } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = () => {
    const listItems = store.getFilter.map((item, index) => {
        return (
            <CSSTransition
                in={true}
                key={String(item.id || "")}
                timeout={500}
                classNames="item-animate"
                onExit={() => {
                    console.log("onExit");
                }}
                onmountOnExit
            >
                <TodoItem
                    item={item}
                    index={index}
                />
            </CSSTransition>
        )}
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
                <TransitionGroup component='ul' className='list-wrapper'>
                    {listItems}
                    <div className='todo-footer'>
                        <div>{store.unfinishedCount} items left</div>
                        <div className='filter'>
                            <button onClick={firstFilter}>All</button>
                            <button onClick={secondFilter}>Active</button>
                            <button onClick={thirdFilter}>Completed</button>
                        </div>
                        {store.showButtonClearAll() ? <button onClick={store.clearCompleted} className='clear-button'>Clear all</button> : ''}
                    </div>
                </TransitionGroup > : null
            }
        </>
    );
}

export default observer(List);
