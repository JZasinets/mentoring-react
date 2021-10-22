import React from 'react';
import store from './store';
import { observer } from "mobx-react";
import Radium, {StyleRoot} from 'radium';

const AddItem = () => {
    const animation = {
        color: Radium.keyframes({
            '0%': {
                backgroundColor: 'lightgreen',
            },
            '50%': {
                backgroundColor: 'yellow',
            },
            '100%': {
                backgroundColor: 'lightgreen',
            }
        })
    }

    const styles = {
        input: {
            animation: 'x 10s linear infinite',
            animationName: animation.color
        }
    }

    return (
        <StyleRoot>
            <div className='todo-input'>
                <button className='button-all' onClick={store.completedAll}>✓</button>
                <form className='form-input' onSubmit={store.addTodoItem}>
                    <input type='text' name='itemListValue' className='todo-create' placeholder='What needs to be done?' style={styles.input}/>
                </form>
            </div>
        </StyleRoot>
    )
}

export default observer(AddItem);
