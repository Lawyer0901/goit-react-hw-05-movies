import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 35px;
  display: flex;
  gap: 25px;
`;

export const Image = styled.img`
  display: block;
  width: 350px;
  margin-top: 5px;
`;

export const Text = styled.p`
  width: 500px;
  color: color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  
`;

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
