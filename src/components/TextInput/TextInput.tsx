import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/store';

const TextInput = observer(() => {
    const { textStore } = useStore();

    return (
        <div>
            <input
                type='text'
                name='textInput'
                value={textStore.text}
                onChange={event => textStore.setText(event.target.value)}
            />
            <p>{textStore.text}</p>
        </div>
    );
});

export default TextInput;
