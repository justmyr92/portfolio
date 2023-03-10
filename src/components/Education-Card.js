const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <h4>
                <i class="fa-solid fa-graduation-cap"></i> {education.type}
            </h4>
            <p className="school">{education.school}</p>
            <p>{education.level}</p>
            <p>{education.year}</p>
        </div>
    );
};

export default EducationCard;
