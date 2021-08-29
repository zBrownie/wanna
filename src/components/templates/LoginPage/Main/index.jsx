import React from "react";
import { Switch, Case, Default } from "react-if";
import LoadingWrap from "../../../../assets/Components/LoadingWrap";
import FormularioCadastro from "../../../organisms/LoginPage/FormularioCadastro";
import FormularioLogin from "../../../organisms/LoginPage/FormularioLogin";
import { MainContainer } from "./styles";

function Main({
  isCadastro,
  toggleCadastro,
  userInfo,
  handleLogin,
  handleCadastro,
  handleOnChange,
  isLoading,
}) {
  return (
    <MainContainer>
      <LoadingWrap isLoading={isLoading}>
        <Switch>
          <Case condition={isCadastro}>
            <FormularioCadastro
              toggleCadastro={toggleCadastro}
              handleCadastro={handleCadastro}
              userInfo={userInfo}
              handleOnChange={handleOnChange}
            />
          </Case>
          <Default>
            <FormularioLogin
              toggleCadastro={toggleCadastro}
              handleLogin={handleLogin}
              userInfo={userInfo}
              handleOnChange={handleOnChange}
            />
          </Default>
        </Switch>
      </LoadingWrap>
    </MainContainer>
  );
}

export default Main;
