import { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import PlayerForm from '../Forms/PlayerForm'
import "./game.css";

const GameTable = (props) => {

  const {gameId} = useParams()
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [score, setScore] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled,setAreDisabled] = useState(false);
  const [isTop10, setIsTop10] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if(tiempoRestante > 0) setTiempoRestante((prev)=> prev -1);
      if(tiempoRestante === 0) setAreDisabled(true);
    },1000);
    
    return () => clearInterval(intervalo);
  },[tiempoRestante])


  function handleAnswerSubmit(isCorrect,e){
    //añadir score.
    if(isCorrect) setScore(score +1);
    //
    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    setTimeout(() => {
      if(preguntaActual === props.game.questions.length -1 ){
        setIsFinished(true);
        if(score >= props.game.top10.sort((a,b) => a-b)[9].score){
          setIsTop10(true)
        }
      }else{
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    },50)
  }
  if(isFinished) return (
    <main className="app-juego-terminado ">
      <div className="juego-terminado ">
        <span className="game-container">Obtuviste {score} de {props.game.questions.length}</span>
        { isTop10 ? <PlayerForm score={score}/> : <button className="btn-play-again px-3" onClick={() => window.location.href = `/game/${gameId}`}> Volver a Jugar</button>}
      </div>
    </main>
  )

  return (
    
      <div>
        <div style={{marginLeft:0,marginRight:0}} className="lado-arriba row">
          <div className="numero-pregunta col-6 ">
            <span className="text-white"> Pregunta {preguntaActual +1}</span>
          </div>
          <div className="col-6 text-end ">
            {!areDisabled ? (
                <span className="tiempo-restante">
                  {tiempoRestante}
                </span>) : (
                  <button
                    onClick={() => {
                      setTiempoRestante(15);
                      setAreDisabled(false);
                      setPreguntaActual(preguntaActual +1);
                    }}> 
                      Continuar 
                  </button>
                    )}
          </div>
          <div className="container-pregunta my-4">
            <p className="titulo-pregunta row text-center">                     
              {props.game.questions[preguntaActual].question}</p>
              { props.game.questions[preguntaActual].isImage && <img className="question-image" src={props.game.questions[preguntaActual].imageUrl}/>    }  
                        
          </div>
        </div>
        <div className="lado-derecho">
          {
            props.game.questions[preguntaActual].answers.map((respuesta) => (
            <button
              className="btns-container col-12"
              disabled = {areDisabled}
              key={respuesta.textoRespuesta+preguntaActual} 
              onClick={(e) => {
                handleAnswerSubmit(respuesta.isCorrect,e)
                
                }} >
                  {respuesta.textoRespuesta}
            </button>)
                )}
        </div>
        </div>
      
     )}
        

export default GameTable;
