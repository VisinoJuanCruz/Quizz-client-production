import { useState, useEffect} from 'react';
import "./listado.css"
import {Link} from 'react-router-dom'

function Listado(){

  const [listado,setListado] = useState([]);
  const [loading, setLoading] = useState(true)


  const loadListado = () => {
    
    fetch('https://quizz-y0dw.onrender.com/api/games')
    .then(res=> res.json())
    .then(listado => {
        setListado(listado)
        setLoading(false)       
    },[loading])
    .catch(err => {
      console.log(err)
    });
  }

  useEffect(()=> {
    loadListado()
  },[])

  return (
    <main className='game-list col-sm-12 col-md-12 col-lg-12 col-xl-8'>           
        <ul className="games ">
        {listado.map((eachGame,index) => {
            return (
                <li className="" key={index}>
                <Link className="game-card" to={`/game/${eachGame._id}`}>
                    {<p className="card-game-title">{eachGame.name}</p>}
                    <img alt={eachGame.name} className="game-img img-fluid" src={eachGame.imageUrl}></img>
                </Link>
                </li>
            )
        })}
        {/* <Link to="/">Volver al inicio</Link> */}
        </ul>
    </main>
  )
}

export default Listado;
