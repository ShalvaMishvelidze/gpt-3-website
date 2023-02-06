import React from 'react';
import './article.css';

const Article = ({ image, date, title }) => {
  return (
    <div className="gpt3-blog-container-article">
      <div className="gpt3-blog-container-article-image">
        <img src={image} alt="blog" />
      </div>
      <div className="gpt3-blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  );
};

export default Article;
