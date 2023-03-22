import styled from '@emotion/styled';

export const FeedbackBtnList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeedbackBtn = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: rgba(222, 218, 237, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
  cursor: pointer;
  &:hover {
    background-color: rgba(222, 218, 237, 1);
  }
`;
