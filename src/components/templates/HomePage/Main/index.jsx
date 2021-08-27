import React from "react";

import {
  ProdutoCard,
  ProdutoImage,
  ProdutoInfo,
  ProdutoName,
  ProdutoPrice,
  Produtos,
  Image,
  MainContainer
} from "./styles";

function Main({ data }) {
  return (
    <MainContainer>
      <Produtos>
        {data.map((prod) => (
          <ProdutoCard>
            <ProdutoImage>
              <Image
                src="https://images.lojanike.com.br/1024x1024/produto/camisa-nike-dri-fit-uniformes-infantil-725984-010-2.jpg"
                alt="camisa"
              />
            </ProdutoImage>
            <ProdutoInfo>
              <ProdutoName>Camisa Preta</ProdutoName>
              <ProdutoPrice>R$ 19,99</ProdutoPrice>
            </ProdutoInfo>
          </ProdutoCard>
        ))}
      </Produtos>
    </MainContainer>
  );
}

export default Main;
