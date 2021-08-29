import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HeaderContainer, TitleHeader, IconHeader } from "./styles";

function Header({ data, callBackClick }) {
  return (
    <HeaderContainer>
      <TitleHeader>Wanna</TitleHeader>
      <IconHeader>
        <AiOutlineShoppingCart className="icon-cart" onClick={callBackClick} />
      </IconHeader>
    </HeaderContainer>
  );
}

export default Header;
