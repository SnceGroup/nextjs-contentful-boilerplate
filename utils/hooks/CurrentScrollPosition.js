import {useState, useEffect} from 'react';

export function CurrentScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState({
        position: undefined,
    });
    useEffect(() => {
        function handleScroll() {
            setScrollPosition({
                position: document.documentElement.scrollTop,
            });
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollPosition;
}

export function ElementPosition(element) {
    const [elementPosition, setElementPosition] = useState({
        position: undefined,
    });

    useEffect(() => {
        setElementPosition({
            position: document.querySelector(element).offsetTop,
        });
    }, []);

    return elementPosition
}
