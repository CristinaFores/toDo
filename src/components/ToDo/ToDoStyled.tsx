import styled from "styled-components";
import { themeColors } from "../../styles/themesUtils";

export const ToDoStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: bold;
  margin: 2rem;
  gap: 10px;
  padding: 1rem;
  background-color: ${themeColors.letterLight};
  border-radius: 5px;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;

export const ToDoButtonStyled = styled.div`
  display: flex;
`;

export const ToDoButtonStyledDelete = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 5px;
  background-color: ${themeColors.header};
  font-size: 1rem;
  :hover {
    background-color: ${themeColors.buttonLightHover};
  }
`;
