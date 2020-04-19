import React from "react";
import styled from "styled-components";
import Game from "./Game";
import Animation from "./Animation";
interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};
// TODO: animation and inputs
export const Container = styled.div<ContainerProps>`
  padding: ${(props) => ("padding" in props ? props.padding : "0")};
  margin: ${(props) => ("margin" in props ? props.margin : 0)};
`;

/*
const board = [
  [true, false, true],
  [false, true, false]
];
 */
/* const board: boolean[][] = [];
const SIZE_X = 10;
const SIZE_Y = 10;
for (let i = 0; i < SIZE_Y; i++) {
  board[i] = [];
  for (let j = 0; j < SIZE_X; j++) {
    board[i][j] = Math.random() < 0.5 ? true : false;
  }
  } */
export default function App({ name }: AppProps) {
  return (
    <Container>
      {/* <Game board={board}/>*/}
      <Animation />
    </Container>
  );
}
