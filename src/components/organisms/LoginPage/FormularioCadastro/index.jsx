import React from "react";
import InputForm from "../../../atoms/Inputs/InputForm";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FormContainer, FormTitle, FormButton, NormalText } from "./styles";

function FormularioCadastro({
  toggleCadastro,
  userInfo,
  handleCadastro,
  handleOnChange,
}) {
  return (
    <FormContainer>
      <FormTitle>Quero me cadastrar.</FormTitle>
      <InputForm
        placeholder="E-mail"
        icon={<AiOutlineMail />}
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleOnChange}
      />
      <InputForm
        placeholder="Senha"
        icon={<RiLockPasswordLine />}
        type="password"
        name="senha"
        value={userInfo.senha}
        onChange={handleOnChange}
      />
      <InputForm
        placeholder="CPF"
        type="number"
        maxLength="11"
        name="cpfcnpj"
        value={userInfo.cpf}
        onChange={handleOnChange}
      />
      <InputForm
        placeholder="CEP"
        type="number"
        maxLength="8"
        name="cep"
        value={userInfo.cep}
        onChange={handleOnChange}
      />
      <FormButton onClick={handleCadastro}>Cadastrar</FormButton>
      <NormalText onClick={toggleCadastro}>Já tenho cadastro.</NormalText>
    </FormContainer>
  );
}

export default FormularioCadastro;
