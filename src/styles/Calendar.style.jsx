import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

export const PaginationButton = styled.button`
  display: inline-block;
  background-color: #3f51b5;
  color: #fff;
  font-size: 24px;
  border: none;
  margin: 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #334296;
  }
`;

export const Day = styled.div`
  box-sizing: border-box;
  font-size: 24px;
  width: ${100 / 7}%;
  padding: 8px;
  height: 64px;
`;

export const DayHeader = styled(Day)`
  text-align: center;
  font-size: 16px;
  height: 48px;
  padding-top: 12px;
`;
