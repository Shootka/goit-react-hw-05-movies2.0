import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadReviewsMovie } from '../../query/loadReviewsMovie';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    loadReviewsMovie(movieId)?.then(r => {
        setReviews(r.data?.results);
      });
  }, []);
  return (
    <ul>
      {reviews?.map(({id, author, content}) => {
        return <li key={id}>
          <p>author: {author}</p>
          <p>{content}</p>
        </li>
      })}
    </ul>
  );
};

export default Reviews;
