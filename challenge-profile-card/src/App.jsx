import { useState } from "react";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "MYSQL",
    level: "advanced",
    color: "#FF3B00",
  },
  {
    skill: "MONGO DB",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  const imagePhoto = "images/Screenshot 2023-08-06 222012.png";
  const name = "John Pena";
  const description =
    "A passionate fullstack developer from Dominican Republic 🇩🇴, I am a technology lover who is constantly looking for information, I really like sports and spending time with my friends.";

  return (
    <div className="card">
      <Avatar imagePhoto={imagePhoto} name={name} />
      <div className="data">
        <Intro name={name} description={description} />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;

function Avatar({ imagePhoto, name }) {
  return <img className="avatar" src={imagePhoto} alt={name} />;
}

function Intro({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function SkillList() {
  const skillsLenght = skills.length;
  return (
    <div className="skill-list">
      {skillsLenght > 0 ? (
        skills.map((skill) => (
          <Skill
            key={skill.skill}
            skill={skill.skill}
            level={skill.level}
            color={skill.color}
          />
        ))
      ) : (
        <p style={{ color: "red" }}>There are no skills</p>
      )}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
