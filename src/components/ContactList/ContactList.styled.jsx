import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  :hover {
    background-color: rgb(245, 161, 248);
  }
`;
