import React, { useEffect, useState } from "react";

import Header from "../../components/templates/LoginPage/Header";
import Main from "../../components/templates/LoginPage/Main";
import { Container } from "./styles";
import useAuth from "./../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { If } from "react-if";
import { Modal } from "antd";
import useToggle from "../../hooks/useToggle";

function LoginPage() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    senha: "",
    cpfcnpj: "",
    cep: "",
  });
  const [isCadastro, setIsCadastro] = useState(false);
  const toggleCadastro = () => setIsCadastro(!isCadastro);
  const [erroState, toggle] = useToggle(false);
  const { login, createAccount, user, isLoading, erro } = useAuth();
  const handleLogin = () => {
    login(userInfo);
  };
  const handleCadastro = () => {
    createAccount(userInfo);
  };

  const handleOnChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (user != null) {
      history.push("/");
    }
  }, [history, user]);

  useEffect(() => {
    if (isLoading === "error") {
      toggle();
    }
  }, [isLoading]);
  return (
    <Container>
      <Header />
      <Main
        toggleCadastro={toggleCadastro}
        isCadastro={isCadastro}
        userInfo={userInfo}
        handleLogin={handleLogin}
        handleCadastro={handleCadastro}
        handleOnChange={handleOnChange}
        isLoading={isLoading === "loading"}
      />
      <If condition={isLoading === "error"}>
        <Modal
          title="OPS!"
          centered
          visible={erroState}
          onOk={toggle}
          onCancel={toggle}
          cancelButtonProps={{ hidden: true }}
        >
          <p>{erro?.code}</p>
          <p>{erro?.message}</p>
        </Modal>
      </If>
    </Container>
  );
}

export default LoginPage;
