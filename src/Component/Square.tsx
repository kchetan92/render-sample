import { useState } from "react";
import styled from "styled-components";

const SqElement = styled.div`
  height: 25px;
  width: 25px;
  display: inline-block;
  border: 1px solid black;
`;

const Square = () => {
  const [active, setActive] = useState(false);

  return (
    <SqElement
      className={active ? "active" : "not-active"}
      onClick={(e) => {
        setActive(!active);
      }}
    />
  );
};

export default Square;
