import React from "react";

interface GameProps {
  board?: boolean[][];
}
class Game extends React.Component<GameProps> {
  private canvasRef: any;

  constructor(props: GameProps) {
    super(props);
    this.canvasRef = React.createRef<HTMLDivElement>();
  }

  render() {
    return (
      <div>
        <canvas width="100%" height="100%" ref={this.canvasRef} />
      </div>
    );
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    //console.log("run");
    //console.log(this.props);
    const { board } = this.props;
    if (!board) return;
    const rows = board.length;
    if (!board[0]) return;
    const columns = board[0].length;
    //console.log(`${columns} ${rows}`);
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    //console.log(`width: ${width}, ${height}`);
    const cellHeight = height / rows || null;
    const cellWidth = width / columns || null;
    //console.log(`${cellHeight} ${cellWidth}`);
    //console.log(`${width}, ${height}`);
    if (cellWidth === null || cellHeight === null) return;
    //console.log("test");
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.save();
    if (height !== null && width !== null) {
      for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
        for (let colIdx = 0; colIdx < columns; colIdx++) {
          const y1 = cellHeight * rowIdx;
          const x1 = cellWidth * colIdx;
          const shouldColor = board[rowIdx][colIdx];
          // console.log(`[${colIdx},${rowIdx}] (${x1},${y1}) w: ${cellWidth} h: ${cellHeight} v: ${shouldColor}`);
          ctx.beginPath();
          //ctx.fillStyle = shouldColor === true ? '#00ff00' : '#ff0000';
          ctx.fillStyle = shouldColor === true ? "#000000" : "#ffffff";
          ctx.rect(x1, y1, cellWidth, cellHeight);
          ctx.fill();
          ctx.save();
        }
      }
    }
    ctx.restore();
  }
}

export default Game;
