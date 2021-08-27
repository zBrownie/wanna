import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;
`;

export const TitleHeader = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: ${(props) => props.theme.primary};
`;

export const IconHeader = styled.div`
  .icon-cart {
    font-size: 1.3rem;
  }
`;
