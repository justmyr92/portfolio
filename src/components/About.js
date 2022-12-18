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
                            elit. Praesent luctus, justo ut scelerisque
                            porttitor, odio metus pellentesque elit, eget rutrum
                            lorem lectus nec metus. Duis porttitor quam a erat
                            volutpat, et aliquam erat elementum. Curabitur eu
                            nisl sollicitudin, finibus ante vel, hendrerit
                            tortor. Vestibulum pellentesque luctus lectus, vitae
                            sagittis nulla bibendum at. Nulla vitae sollicitudin
                            sapien. Sed vitae efficitur sapien. Vestibulum
                            ultricies laoreet commodo. Cras a iaculis diam.
                            Integer nec massa augue. Curabitur lectus leo,
                            fermentum eget purus vitae, vulputate molestie nibh.
                            In et malesuada felis. Aliquam convallis pharetra
                            dolor, non tempus libero. Praesent non consectetur
                            orci. Nullam non nisl dolor. Cras vestibulum porta
                            nulla ac elementum. Vivamus vulputate, lorem vitae
                            rutrum feugiat, nulla risus commodo urna, convallis
                            aliquam nisl nisi non mi.
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
