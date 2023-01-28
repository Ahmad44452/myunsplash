import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 3rem 3rem;
  width: 65rem;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  font-size: 2.7rem;
  color: #333333;
  line-height: 1;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
  font-size: 1.6rem;
  color: #4F4F4F;
  display: block;
  margin-bottom: .3rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #4F4F4F;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  font-size: 1.6rem;
  outline: none;
  color: #4F4F4F;
  padding: 1rem 1rem;

  &::placeholder{
    color: #BDBDBD;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
`

export const ButtonGroup = styled.div`
  /* text-align: right; */
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  color: #BDBDBD;
  font-size: 1.6rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 1rem;

  &:hover{
    text-decoration: underline;
  }
`;
