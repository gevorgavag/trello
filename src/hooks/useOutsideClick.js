import {useEffect, useRef, useState} from "react";

export const useOutsideClick = (initialValue = false) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(initialValue);

    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);

    return {ref, isActive, setIsActive}
}