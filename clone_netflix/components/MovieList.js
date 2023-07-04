import React from "react";
import styles from "../styles/MovieList.module.css";

const MovieList = (props) => {
  const { title, posters } = props;

  return (
    <div className={styles.box}>
      <p className={styles.subject}>{title}</p>
      <div className={styles.container}>
        {posters.map((post, index) => (
          <div key={index} className={styles.movie}>
            <img src={post} alt="포스터" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
