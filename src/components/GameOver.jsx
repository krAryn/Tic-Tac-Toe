export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner !== null ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button onClick={onRematch}>Rematch!</button>
    </div>
  );
}