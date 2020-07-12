import React from "react";
import { Window, WindowHeader, WindowContent } from "react95";
import styled from "styled-components";

const Frame = styled.div`
  height: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 0px 0px inset, rgb(134, 138, 142) 1px 1px 0px 0px inset,
    rgb(255, 255, 255) 0.5px 0.5px 0px 0.5px;
  padding: 10px;
  min-width: 640px;
  min-height: 500px;
  display: grid;
`;

const Folder = styled.div`
  display: flex;
  place-items: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5em;
`;

export default () => (
  <Window>
    <WindowHeader>mdrjpp</WindowHeader>
    <WindowContent>
      <Frame>
        <Folder>
          <Title>Formula 1</Title>
        </Folder>
      </Frame>
    </WindowContent>
  </Window>
);
