import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  margin: 0.6rem auto;
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  border: 0.1rem solid #33333322;
  height: 3rem;

  svg {
    font-size: 1.3rem;
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding-left: 0.4rem;
  outline: none;
`;
