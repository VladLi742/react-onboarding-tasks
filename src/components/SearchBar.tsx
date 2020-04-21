import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { SearchBarProps } from "../interfaces";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
`;

export default function SearchBar(props: SearchBarProps) {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
          if (props.callback) {
            props.callback(e.target.value);
          }
        }}
        value={value}
        type="text"
      />
    </Container>
  );
}
