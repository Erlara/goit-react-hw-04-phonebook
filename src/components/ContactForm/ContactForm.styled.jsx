import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 300px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Button = styled.button`
  :hover {
    background-color: rgb(245, 161, 248);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
