import React from "react";
import Header from "../../components/templates/HomePage/Header";
import Main from "../../components/templates/HomePage/Main";
import { Container } from "./styles";
import useAuth from "./../../hooks/useAuth";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();
  const { user } = useAuth();
  const arra = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  // const { data, status, error } = useFirestoreQuery(
  //   firestore.collection("profiles").doc(uid)
  // );

  const handleClickCart = () => {
    if (user != null) {
      history.push("/carrinho");
      return;
    }

    history.push("/login");
  };
  return (
    <Container>
      <Header callBackClick={handleClickCart} />
      <Main data={arra} />
    </Container>
  );
}

export default HomePage;
