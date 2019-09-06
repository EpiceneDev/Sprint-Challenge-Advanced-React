import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)

    useEffect(() => {
        if (darkMode === true) {
            return window.document.body.classList.add('dark-mode')
        }else{
            return window.document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode ]
}