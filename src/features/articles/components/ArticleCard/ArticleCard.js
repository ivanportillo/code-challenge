import React from 'react';
import PropTypes from 'prop-types';

import './ArticleCard.css';

const ArticleCard = ({ author, excerpt, title }) =>
  <div className="ArticleCard">
    <div className="Title">{title}</div>
    <div className="Author">{author}</div>
    <div className="Excerpt">{excerpt}</div>
  </div>;

ArticleCard.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleCard;
