import React, { useEffect } from 'react'
import Radium, {StyleRoot} from 'radium';
import store from './components/Todo/store'
import {observer} from 'mobx-react'

const Spinner = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            store.startApplication();
        }, 1500);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    const animation = {
        transform: Radium.keyframes({
            '0%': {
                transform: 'rotate(0deg)',
            },
            '50%': {
                transform: 'rotate(180deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            }
        })
    }

    const styles = {
        image: {
            animation: 'x 2s linear infinite',
            animationName: animation.transform
        }
    }

    if (!store.loading) return null;

    return (
        <div className='spinner'>
            <StyleRoot>
                <div className='todo-input' style={styles.image}>
                    <img src='https://kanzoboz.ru/data/images/623489.png' />
                </div>
            </StyleRoot>
        </div>
    )
}

export default observer(Spinner);