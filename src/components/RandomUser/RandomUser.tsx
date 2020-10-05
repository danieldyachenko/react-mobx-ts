import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/store';

const RandomUser = observer(() => {
    const { userStore } = useStore();

    useEffect(() => {
        userStore.getName();
    }, [userStore]);

    return (
        <div>
            <h3>
                {userStore.status === 'pending'
                    ? 'Loading...'
                    : userStore.status === 'error'
                    ? userStore.error
                    : userStore.fullName}
            </h3>
            <p>
                <button onClick={() => userStore.getName()}>Get name</button>
            </p>
        </div>
    );
});

export default RandomUser;
