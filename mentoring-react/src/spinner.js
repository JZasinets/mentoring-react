import React from 'react';
import Radium, {StyleRoot} from 'radium';

const Spinner = () => {
    const animation = {
        transform: Radium.keyframes({
            '0%': {
                transform: 'rotate(0deg) scale(0.7)',
            },
            '50%': {
                transform: 'rotate(180deg) scale(1)',
            },
            '100%': {
                transform: 'rotate(360deg) scale(0.7)',
            }
        })
    }

    const styles = {
        image: {
            animation: 'x 5s linear infinite',
            animationName: animation.transform
        }
    }

    return (
        <StyleRoot>
            <div className='todo-input' style={styles.image}>
                <img src='image/loading.jpg' />
            </div>
        </StyleRoot>
    )
}

export default Spinner;