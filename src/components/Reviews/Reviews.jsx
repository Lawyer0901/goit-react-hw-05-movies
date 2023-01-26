import { getReviewById } from 'services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wraper, ReviewsItem, ReviewsText } from './Reviews.styled';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();
  // console.log(moviesId);
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

  return reviews.results.length ? (
    <>
      <Wraper>
        {reviews.results.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <ReviewsText>{author}</ReviewsText>
            <p>{content}</p>
          </ReviewsItem>
        ))}
      </Wraper>
    </>
  ) : (
    <p>SORRY There is no reviews!</p>
  );
};

export default Reviews;
