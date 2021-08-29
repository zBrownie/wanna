import React from "react";
import InputForm from "../../../atoms/Inputs/InputForm";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FormContainer, FormTitle, FormButton, NormalText } from "./styles";

function FormularioLogin({
  toggleCadastro,
  userInfo,
  handleLogin,
  handleOnChange,
}) {
  return (
    <FormContainer>
      <FormTitle>Já tenho cadastro.</FormTitle>
      <InputForm
        placeholder="E-mail"
        name="email"
        icon={<AiOutlineMail />}
        type="email"
        value={userInfo.email}
        onChange={handleOnChange}
      />
      <InputForm
        placeholder="Senha"
        name="senha"
        icon={<RiLockPasswordLine />}
        type="password"
        value={userInfo.senha}
        onChange={handleOnChange}
      />
      <FormButton onClick={handleLogin}>Entrar</FormButton>
      <NormalText onClick={toggleCadastro}>Quero me cadastrar.</NormalText>
    </FormContainer>
  );
}

export default FormularioLogin;
