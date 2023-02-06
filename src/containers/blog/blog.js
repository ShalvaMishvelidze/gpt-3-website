import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const articleData = [
  {
    image: blog02,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog03,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog04,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog05,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
];

const Blog = () => {
  return (
    <div className="gpt3-blog section-padding" id="blog">
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3-blog-container">
        <div className="gpt3-blog-container-group-a">
          <Article
            image={blog01}
            date={'Sep 26, 2021'}
            title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          />
        </div>
        <div className="gpt3-blog-container-group-b">
          {articleData.map(({ image, date, title }, index) => {
            return (
              <Article
                image={image}
                date={date}
                title={title}
                key={index + new Date().toDateString()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
