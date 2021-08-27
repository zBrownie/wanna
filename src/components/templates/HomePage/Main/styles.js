import styled from "styled-components";
import breakpoints from "../../../../utils/breakpoints";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 920px;
  margin: 0 auto;
`;

export const Produtos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProdutoCard = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 22%;
  ${breakpoints("flex-basis", "%", [{ 920: 50 }])};
  transition: 2s;
  :hover {
    opacity: 0.6;
    transform: scale(1.05);
  }
`;

export const ProdutoImage = styled.div``;

export const Image = styled.img`
  max-width: 100%;
`;

export const ProdutoInfo = styled.div`
  margin-top: auto;
`;

export const ProdutoName = styled.h5``;

export const ProdutoPrice = styled.h6``;
