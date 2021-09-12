import "./skillList.scss";

export default function SkillList({ title, items }) {
    return (
      <div className="skillList">
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }