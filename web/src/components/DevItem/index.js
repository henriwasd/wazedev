import React from "react";

import "./styles.css";

export default function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt="avatar" />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>ReactJs, VueJs</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}
