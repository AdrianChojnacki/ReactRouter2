import React from "react";
import "../styles/Article.css";

export default function Article({ title, author, text }) {
  const styles = {
    marginBottom: 10,
    fontSize: 30,
  };

  return (
    <article>
      <h3 style={styles}>{title}</h3>
      <span style={{ display: "block", marginBottom: 10, fontSize: 16 }}>{author}</span>
      <p>{text}</p>
    </article>
  );
}
