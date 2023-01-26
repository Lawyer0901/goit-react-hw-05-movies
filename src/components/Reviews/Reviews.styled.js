import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 0 auto;
  width: 1020px;
`;

export const ReviewsItem = styled.li`
  list-style: none;
`;

export const ReviewsText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
