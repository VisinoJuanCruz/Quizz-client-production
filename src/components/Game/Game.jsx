import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Top10 from '../Top10/Top10';
import GameTable from './GameTable'
import "./game.css";

const Game = () => {
  const {gameId} = useParams()
  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(true);
  
  function loadGame(){
    fetch(`https://quizz-y0dw.onrender.com/api/game/${gameId}`)
      .then(response => response.json())
      .then(game => {
        game.questions = game.questions.sort(() => Math.random() - 0.5).slice(0,25)//  Con esta línea corta la cantidad en 10 unidades   .slice(0,10)
        setGame(game)
        setLoading(false)
      })
  }
 
  useEffect(() => {    
      loadGame()   
  },[])
 
  
  useEffect(() => {
    //console.log("ESTA CARGANDO")
  },[loading])
  

  if(loading){
    return(
    <main>
      Cargando
    </main>);
  }else{
    if(game.questions.length === 0){
      return (
      <main>
        <h1>Aun no tenemos preguntas para este tema, agregá algunas:</h1> 
        <h2><Link to={`/Quizz-client-production/game/${gameId}/add-question`}>Agregar pregunta</Link></h2>
      </main>)
    }
    return (
      <div style={{backgroundImage: `url(${game.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height:"100%",
                                     }} className="row game-container">
        <h1 className="game-title text-center"> {game.name} </h1>
        <div className="game col-md-6 col-sm-12 mt-3">
          <GameTable game={game}/>
        </div>
        <div className="game col-md-6 col-sm-12 mt-3">
          <Top10 /> 
        </div>
        {/*<Link to={`/game/${gameId}/add-question`}>Agregar pregunta</Link> */}
      </div> )}
        }

export default Game;