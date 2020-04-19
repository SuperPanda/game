import React from "react";
import Game from "./Game";
interface AnimationState {
  board: Grid;
}
type Grid = boolean[][];
export default class Animation extends React.Component<{}, AnimationState> {
  private rAF: number = 0;
  constructor(props: {}) {
    super(props);

    this.state = { board: [] };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState(): void {
    this.setState((prevState: AnimationState) => ({
      board: Animation.generateNextBoard(prevState),
    }));

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  static generateNextBoard({ board }: { board: Grid }): boolean[][] {
    //const board = this.board;
    //const board: Grid = [];
    const newBoard: boolean[][] = [];
    const SIZE_X = 10;
    const SIZE_Y = 10;
    for (let i = 0; i < SIZE_Y; i++) {
      newBoard[i] = [] as boolean[];
      for (let j = 0; j < SIZE_X; j++) {
        newBoard[i][j] = Math.random() < 0.5 ? true : false;
      }
    }
    return newBoard;
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Game board={this.state.board} />;
  }
}
