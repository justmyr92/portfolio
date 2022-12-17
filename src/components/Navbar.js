import { React } from "react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

//navbar onScroll={handleScroll}

const Navbar = ({ title }) => {
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = navbarRef.current;
            const scrollTop = window.scrollY;

            if (scrollTop > 0) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className="navbar" ref={navbarRef}>
            <div className="container">
                <h1 className="navbar-brand">{title}</h1>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#asd">About</a>
                    </li>
                    <li>
                        <a href="#asdasd">Education</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#asd">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
Navbar.defaultProps = {
    title: "Justmyr Gutierrez",
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
