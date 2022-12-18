import { React } from "react";
import PropTypes from "prop-types";

const About = ({ title }) => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about_content">
                    <div className="about_left">
                        <img
                            src="https://images.pexels.com/photos/14679371/pexels-photo-14679371.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="#"
                        />
                    </div>
                    <div className="about_right">
                        <h3>{title}</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec ac nisl urna. Fusce congue sollicitudin
                            hendrerit. Suspendisse in nibh metus. Integer varius
                            vestibulum nulla a imperdiet. Maecenas at eleifend
                            ante. Morbi at nunc eu justo imperdiet euismod.
                            Mauris vitae tempus odio. Sed aliquam, ante quis
                            aliquet rhoncus, est nisi sollicitudin sapien,
                            mattis rutrum orci orci sit amet ipsum. Morbi nec
                            libero vitae ex rhoncus rutrum. Nulla quis lorem in
                            libero luctus feugiat.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.defaultProps = {
    title: "About",
};

About.propTypes = {
    title: PropTypes.string.isRequired,
};
export default About;
