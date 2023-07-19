import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./top10.css"

function Top10 (){

    const {gameId} = useParams()
    const [top10, setTop10] = useState({})
    const [loading, setLoading] = useState(true)
   
    function loadTop10(){
        fetch(`https://quizz-y0dw.onrender.com/api/game/${gameId}/top10`)
        .then(response => response.json())
        .then(top10 => {
            const theTop10 = top10.sort((a,b) =>  parseInt(b.score) - parseInt(a.score)).slice(0,10)
            setTop10(theTop10)
            setLoading(false)
        })}
      
        useEffect(() => {
          //console.log("CARGANDO TO 10")
          loadTop10()
        },[loading])
        
        useEffect(() => {
            //console.log("RENDER MUCH?=")
        },[loading])
          
        useEffect(() => {
            //console.log("RE NUEVO")
        },[gameId])

  if(loading){
    return(
    <main> 
      Loading       
    </main>);
  }else{
  return(
        <div className="top10-container">
          <h5 className="top10-title"><u>Top10</u></h5>          
            <ul className="top10-list">{top10.map((player,id) => (
              <li key={id+1} className="top10-player flex">
                <p className="top10-name">{id+1}. {player.name}</p>
                <p className="top10-score"> {player.score}</p>
                </li>
              ))}</ul> 
        </div>
    )  
  };
}

export default Top10;