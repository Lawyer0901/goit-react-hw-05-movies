import { getReviewById } from 'services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();
  console.log(moviesId);
  useEffect(() => {
    getReviewById(moviesId).then(
      data => setReviews(data)
      // console.log(data);
    );
  }, [moviesId]);
  // console.log(movie);

  if (reviews === null) {
    return;
  }
  console.log(reviews);

  return (
    <div>
      {reviews.results.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
