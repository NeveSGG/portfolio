import { useEffect, useState } from "react";

export const useScrollChange = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState(1)
    // 1 is up, -1 is down

    useEffect(() => {
        const updatePosition = () => {
            const position = window.pageYOffset
            setScrollPosition( (oldPosition) => {
                if (position > oldPosition) setScrollDirection(-1)
                else if (position < oldPosition) setScrollDirection(1)
                return position
            })
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition)
    }, []);

    return {scrollPosition, scrollDirection};

}