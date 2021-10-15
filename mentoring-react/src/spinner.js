import React from 'react';
import Radium, {StyleRoot} from 'radium';

const Spinner = () => {
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

    return (
        <StyleRoot>
            <div className='todo-input' style={styles.image}>
                <img src='https://kanzoboz.ru/data/images/623489.png' />
            </div>
        </StyleRoot>
    )
}

export default Spinner;