import { useEffect } from "react";

export function useOutsideClick (elementRef, handler, attached = false) {
    useEffect(() => {
        if (!attached) return;

        const handleClick = (e) => {
            if (!elementRef.current) return
            if (!elementRef.current.contains(e.target)) {
                handler()
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [elementRef, handler, attached])
}