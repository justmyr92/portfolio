import { React } from "react";
import PropTypes from "prop-types";

const Home = ({ firstname, lastname }) => {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="column-1">
                        <h3>Hi, I'm</h3>
                        <h1>
                            <span>{firstname} </span>
                            {lastname}
                        </h1>
                        <p>
                            A Front-End Web Developer passionate about creating
                            interactive applications and experiences on the web.
                        </p>
                        <div className="control-link">
                            <a href="#asd" className="btn btn-purple">
                                Get to know me
                            </a>
                            <a
                                href="#resume"
                                className="btn btn-outline-purple"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="column-2"></div>
                </div>
            </div>
        </section>
    );
};

Home.defaultProps = {
    firstname: "Justmyr",
    lastname: "Gutierrez",
};

Home.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default Home;
