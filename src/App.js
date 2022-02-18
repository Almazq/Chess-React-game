import './App.css';
import React, {useState,useEffect,useRef} from 'react';
import ChessBoard from "chessboardjsx"
import Chess from "chess.js"

function App() {
  const [fen,setFen] = useState("start");
  let game = useRef(null);
  useEffect(()=>{
    console.log("SAD")
    game.current = new Chess();
    console.log(game)
  },[]);
  const onDrop = ({sourceSquare,targetSquare})=>{
    // debugger;
    let move = game.current.move({
      from:sourceSquare,
      to:targetSquare
    });
    if(move === null) return;
    setFen(game.current.fen)
  }

  return (
    <div className="body">
      {game.current && game.current.game_over() ? <h1 >GAME OVER</h1> :<div></div> }
      <ChessBoard position={fen} onDrop={onDrop} />
    </div>
  );
}

export default App;
