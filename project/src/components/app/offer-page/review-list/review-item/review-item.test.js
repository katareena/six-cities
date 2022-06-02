import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewItem from './review-item';

const testReview = {
  id: 1,
  comment: 'test comment',
  date: '2019-05-08T14:13:56.569Z',
  rating: 5,
  avatarUrl: 'test url',
  name: 'test name',
  isPro: false,
};

describe('Compotent: ReviewItem', () => {
  it('should render correctly', () => {
    render(
      <ReviewItem
        avatarUrl={testReview.avatarUrl}
        name={testReview.name}
        rating={testReview.rating}
        comment={testReview.comment}
        date={testReview.date}
        id={testReview.id}
        key={testReview.id}
      />,
    );

    const commentElement = screen.getByText('test comment');
    const nameElement = screen.getByText('test name');
    const imageElement = screen.getByRole('img', 'test url');
    const timeElement = screen.getByTestId('reviews-test-time');

    expect(commentElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test url');
    expect(timeElement).toHaveTextContent('May 2019');
  });
});
