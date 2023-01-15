import styled from "styled-components";
import { themeColors } from "../../styles/themesUtils";

export const HeaderStyled = styled.header`
  text-align: center;
  color: ${themeColors.header};
  font-size: 30px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
  border-radius: 50px;
  img {
    object-fit: contain;
    width: 200px;
    height: 200px;
  }
`;
