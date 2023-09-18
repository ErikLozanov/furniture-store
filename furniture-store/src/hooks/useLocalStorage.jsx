import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // const key = useId();
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

           return persistedState;
        } else {
            localStorage.clear();
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value.user);

        localStorage.setItem(key, JSON.stringify(value.user));
    };

    return [
        state,
        setLocalStorageState,
    ];
};
