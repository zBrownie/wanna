import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export const FormTitle = styled.h3``;

export const FormButton = styled.button`
  border-radius: 0.2rem;
  height: 3rem;
  background: ${(props) => props.theme.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0.9rem 0;
  :hover {
    opacity: 0.6;
  }
`;

export const NormalText = styled.p`
  text-decoration: underline;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  transition: 2s;
  :hover {
    transform: scale(1.05);
  }
`;
