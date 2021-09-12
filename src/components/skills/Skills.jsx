import SkillList from "../skillList/skillList";

import "./skills.scss";

const Skills = () => {
    return (
        <div className="skills">
        <h1><span>S</span>kills</h1>
            <SkillList
                title="FrontEnd"
                items={['HTML', 'CSS/SCSS', 'JavaScript', 'REACT']}
            />
            <SkillList
                title="BackEnd"
                items={['Node', 'Express', 'MySql', 'Git/GitHub']}
            />
            <SkillList
                title="Soft Skills"
                items={['Autonomie', 'Réactivité', 'Méthode Agile']}
            />            
        </div>
    );
};

export default Skills;