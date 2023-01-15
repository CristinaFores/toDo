import { HeaderStyled } from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>To Do List</h1>

      <img
        src="https://media.giphy.com/media/Z9WRoncIw8RYBLJ0FB/giphy.gif"
        alt="todo list"
      />
    </HeaderStyled>
  );
};

export default Header;
