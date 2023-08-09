import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const imagePhoto = "images/Screenshot 2023-08-06 222012.png";
  const name = "John Peña";
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
  return (
    <div className="skill-list">
      <Skill skill="Java" emoji="💪" color="orangered" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="💪" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
