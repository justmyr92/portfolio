import { useState, useEffect } from "react";

const GoToTop = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
            console.log(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const button = document.getElementById("top-button");
        button.addEventListener("click", () => {
            window.scrollTo(0, 0);
        });
    }, []);

    return (
        <button
            id="top-button"
            className="top-button"
            style={{
                opacity: scrollY > 0 ? 1 : 0,
            }}
        >
            Top
        </button>
    );
};

export default GoToTop;
