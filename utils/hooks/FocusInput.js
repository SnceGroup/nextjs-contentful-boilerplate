import {useEffect} from 'react';

export function FocusInput(isShown, inputRef) {
    useEffect(() => {
        if (isShown) {
            inputRef.current.focus();
        }
    }, [isShown]);
}