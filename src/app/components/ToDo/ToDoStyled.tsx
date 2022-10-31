import styled from "styled-components";
import { themeColors } from "../../styles/themesUtils";

export const ToDoStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 2rem;
  gap: 10px;
  border: solid 1px ${themeColors.letterDark};
  padding: 1rem;
  width: fit-content;
  background-color: ${themeColors.backgroundLight};
  border-radius: 5px;

  ul {
    padding: 0px;
    text-align: center;
  }

  li {
    justify-items: start;
  }
`;

export const ToDoButtonStyled = styled.div`
  display: flex;
`;

export const ToDoButtonStyledDelete = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 5px;
  background-color: ${themeColors.buttonDark};
  font-size: 1rem;
  font-size: 1rem;
  font-weight: bold;
  :hover {
    background-color: ${themeColors.buttonDarkHover};
  }
`;

export const ToDoButtonStyledModify = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 5px;
  background-color: ${themeColors.buttonLight};
  font-size: 1rem;
  font-weight: bold;
  :hover {
    background-color: ${themeColors.buttonLightHover};
  }
`;
