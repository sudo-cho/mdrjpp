import React from "react";
import { Window, WindowHeader, WindowContent } from "react95";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "./Icon.js";

const Frame = styled.div`
  height: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 0px 0px inset, rgb(134, 138, 142) 1px 1px 0px 0px inset,
    rgb(255, 255, 255) 0.5px 0.5px 0px 0.5px;
  padding: 10px;
  min-width: 640px;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1em;
`;

export default () => (
  <Window>
    <WindowHeader>mdrjpp</WindowHeader>
    <WindowContent>
      <Frame>
        <Link to="/f1">
          <Folder>
            <Icon name="folder" />
            <Title>Formule 1</Title>
          </Folder>
        </Link>
      </Frame>
    </WindowContent>
  </Window>
);
