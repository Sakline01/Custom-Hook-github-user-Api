import React from "react";
import styles from "./show.module.css";
const Show = (props) => {
  const url = `https://github-readme-stats.vercel.app/api/top-langs/?username=${props.userName}&theme=light&hide_langs_below=1`;
  return (
    <div className={styles.flex}>
      <div>
        <a href={props.link}>
          <img src={props.avatar} alt="" />
        </a>
      </div>
      <div>
        <img src={url} alt="profile" />
        <h2>{props.userName}</h2>
      </div>
    </div>
  );
};

export default Show;
