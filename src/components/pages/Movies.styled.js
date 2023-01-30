import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const MovieItemLink = styled(Link)`
  display: inline-block;
   transition: transform 0.4s ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
`;

export const MovieItem = styled.li`
  list-style: none;
`;

export const Form = styled.form`
  margin-left: 25px;
`;

export const Input = styled.input`
  margin-right: 15px;
  border: 1px solid #cccccc; //цвет рамки
  border-radius: 3px; //закругление углов (общее)
  -webkit-border-radius: 3px; //закругление углов (Google Chrome)
  -moz-border-radius: 3px; //закругление углов (FireFox)
  -khtml-border-radius: 3px; //закругление углов (Safari)
  background: #ffffff !important; // желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым
  outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
  height: 24px; // высота на свое усмотрение
  width: 120px; // ширина на свое усмотрение
  color: #cccccc; //цвет шрифта в обычном состоянии
  font-size: 11px; // Размер шрифта
  font-family: Tahoma; // Стиль шрифта
`;

export const FormButton = styled.button`
  /* <!-- HTML !-->
<button class="button-33" role="button">Button 33</button> */

  /* CSS */

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
