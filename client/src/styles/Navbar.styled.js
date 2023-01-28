import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  margin-bottom: 2rem;
`;

export const LeftContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`

`;

export const SearchContainer = styled.label`
  background-color: #fff;
  border: 1px solid #BDBDBD;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: text;
  margin-left: 1rem;

  svg{
    fill: #BDBDBD;
    width: 2rem;
    height: 2rem;
  }
`;

export const SearchField = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: .5rem;
`;