import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut fugiat vero eius voluptate, autem itaque numquam aspernatur natus assumenda accusamus ipsa? Similique assumenda autem eius iste porro corporis architecto.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut fugiat vero eius voluptate, autem itaque numquam aspernatur natus assumenda accusamus ipsa? Similique assumenda autem eius iste porro corporis architecto.",
  },
  {
    id: 3,
    title: "Czym jest materia i ciemna energia?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut fugiat vero eius voluptate, autem itaque numquam aspernatur natus assumenda accusamus ipsa? Similique assumenda autem eius iste porro corporis architecto.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} title={article.title} author={article.author} text={article.text} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
