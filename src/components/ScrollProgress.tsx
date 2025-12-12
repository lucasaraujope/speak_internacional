import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateScrollProgress = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = (window.scrollY / scrollHeight) * 100;
                    setScrollProgress(scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-muted/30">
            <div
                className="h-full bg-gradient-gold shadow-gold will-change-transform"
                style={{
                    width: `${scrollProgress}%`,
                    transition: 'width 100ms ease-out'
                }}
            />
        </div>
    );
};

export default ScrollProgress;
