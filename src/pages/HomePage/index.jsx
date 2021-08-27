import React from "react";
import Header from "../../components/templates/HomePage/Header";
import Main from "../../components/templates/HomePage/Main";
import { Container } from "./styles";

function HomePage() {
  const arra = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <Container>
      <Header />
      <Main data={arra} />
    </Container>
  );
}

export default HomePage;
