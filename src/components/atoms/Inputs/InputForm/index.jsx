import React from "react";
import { If } from "react-if";
import { Container, FormInput, IconContainer } from "./styles";

function InputForm(props) {
  return (
    <Container>
      <IconContainer>
        <If condition={props.icon != null}>{props.icon}</If>
      </IconContainer>
      <FormInput {...props} />
    </Container>
  );
}

export default InputForm;
