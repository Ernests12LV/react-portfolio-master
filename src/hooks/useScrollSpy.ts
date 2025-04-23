import { useState, useEffect } from 'react';

export const useScrollSpy = (targetIds: string[], offset = 0) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            const elements = targetIds.map(id => {
                const element = document.getElementById(id);
                if (element) {
                    return {
                        id,
                        position: element.offsetTop
                    };
                }
                return null;
            }).filter((item): item is { id: string; position: number } => item !== null);

            const sorted = [...elements].sort((a, b) => a.position - b.position);

            for (let i = sorted.length - 1; i >= 0; i--) {
                if (scrollPosition >= sorted[i].position) {
                    setActiveId(sorted[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [targetIds, offset]);

    return activeId;
};