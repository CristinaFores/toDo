import styled from "styled-components";
import { themeColors } from "../../styles/themesUtils";

export const ListToDoStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${themeColors.letterDark};
  width: fit-content;
  margin: 2rem;
  padding: 1rem;
`;

export const ToDoButtonStyledRemove = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 5px;
  background-color: ${themeColors.buttonAdd};
  font-size: 1rem;
  font-weight: bold;
  :hover,
  :focus {
    background-color: ${themeColors.buttonAddHover};
  }
`;

export const FormStyled = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column-reverse;
  justify-content: center;
`;

export const ToDoListInputStyled = styled.input`
  border: none;
  border: none;
  padding: 0.5rem;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;
