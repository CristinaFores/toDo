import styled from "styled-components";
import { themeColors } from "../../styles/themesUtils";

export const ListToDoStyled = styled.main`
  display: flex;
  overflow-wrap: break-word;
  padding: 20px;
  justify-content: center;
  ul {
    display: flex;
    gap: 2rem;
    width: 22rem;
    flex-wrap: wrap;
  }
  span {
    border-radius: 5px;
    width: 300px;
    background-color: ${themeColors.header};
    padding: 1rem;
    display: flex;
    justify-content: center;
    color: ${themeColors.letterDark};
  }
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
  gap: 0.5rem;
  background-color: ${themeColors.header};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
  width: 300px;
  margin: 20px;
`;

export const ToDoListInputStyled = styled.input`
  border: none;
  border: none;
  padding: 0.5rem;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const ContainStyled = styled.div`
  display: flex;
  justify-content: center;
`;
