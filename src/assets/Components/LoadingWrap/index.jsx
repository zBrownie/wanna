import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Container } from "./styles";

function LoadingWrap(props) {
  const antIcon = <LoadingOutlined className="spinner" spin />;
  return (
    <Container>
      <Spin
        indicator={antIcon}
        spinning={props.isLoading}
        tip={props?.tip != null ? props.tip : ""}
      >
        {props.children}
      </Spin>
    </Container>
  );
}
export default LoadingWrap;
