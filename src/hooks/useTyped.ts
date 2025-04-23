import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface UseTypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
}

export const useTyped = ({ strings, typeSpeed = 50, backSpeed = 50, backDelay = 2000, loop = true }: UseTypedProps) => {
    const elementRef = useRef<HTMLSpanElement>(null);
    const typedRef = useRef<Typed | null>(null);

    useEffect(() => {
        if (elementRef.current) {
            typedRef.current = new Typed(elementRef.current, {
                strings,
                typeSpeed,
                backSpeed,
                backDelay,
                loop
            });
        }

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [strings, typeSpeed, backSpeed, backDelay, loop]);

    return elementRef;
};