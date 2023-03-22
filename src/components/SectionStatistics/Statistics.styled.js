import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  &:not(:nth-of-type(2n)) {
    margin-bottom: 30px;
  }
`;

export const StatisticItem = styled.li`
  padding: 4px 0;
`;

export const SpanItem = styled.span`
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  background-color: rgba(222, 218, 237, 1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
`;
