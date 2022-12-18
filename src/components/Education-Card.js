const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <h4>{education.type}</h4>
            <p>{education.school}</p>
            <p>{education.level}</p>
            <p>{education.year}</p>
        </div>
    );
};

export default EducationCard;
