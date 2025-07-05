import { useEffect, useState } from "react";

export default function useClientLocalStorage(key, initialValue) {
    const [value, setValue] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem(key)
        if (stored) {
            setValue(JSON.parse(stored));
        } else {
            setValue(initialValue);
        }
    }, []);

    useEffect(() => {
        if (value !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value]);

    return [value, setValue];
}
