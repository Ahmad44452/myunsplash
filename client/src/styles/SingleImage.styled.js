import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  line-height: 1;
  border-radius: 24px;
  overflow: hidden;

  img{
    width: 100%;
  }
`;

export const HoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: none;

  ${ImageContainer}:hover > &{
    display: block;
  }
`;

export const HoverText = styled.p`
  position: absolute;
  bottom: 32px;
  left: 24px;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
`;

export const HoverButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  outline: none;
  background-color: transparent;
  border: 1px solid #EB5757;
  border-radius: 38px;
  font-weight: 600;
  font-size: 1.5rem;
  padding: .3rem 1.3rem;
  color: #EB5757;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    background-color: #EB5757;
    color: #fff;
  }
`;