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
