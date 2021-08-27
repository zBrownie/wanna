import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeaderContainer, TitleHeader, IconHeader } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <TitleHeader>Wanna</TitleHeader>
      <IconHeader>
        <AiOutlineShoppingCart className="icon-cart" />
      </IconHeader>
    </HeaderContainer>
  );
}

export default Header;
