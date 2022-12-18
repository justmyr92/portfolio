import { React } from "react";
import EducationCard from "./Education-Card";
import { useState } from "react";
import PropTypes from "prop-types";

const Education = ({ title }) => {
    //use state array of objects
    //use map to loop through the array of objects
    //use the data to populate the education_content div
    const [education, setEducation] = useState([
        {
            id: 1,
            type: "Primary Education",
            school: "Balete Relocation Site Elementary School",
            level: "Elementary",
            year: "2008 - 2014",
        },
        {
            id: 2,
            type: "Secondary Education",
            school: "Balete Integrated School",
            level: "Junior High School",
            year: "2014 - 2018",
        },
        {
            id: 3,
            type: "Secondary Education",
            school: "AMA Computer College - Batangas",
            level: "Senior High School",
            year: "2018 - 2020",
        },
        {
            id: 4,
            type: "Tertiary Education",
            school: "Batangas State University - Alangilan Campus",
            level: "Bachelor of Science in Information Technology Major in Service Management",
            year: "2020 - Present",
        },
    ]);

    return (
        <section className="education" id="education">
            <div className="container">
                <h3>{title}</h3>
                <div className="education_content">
                    {education.map((education) => (
                        <EducationCard
                            key={education.id}
                            education={education}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

Education.defaultProps = {
    title: "Education",
};

Education.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Education;
