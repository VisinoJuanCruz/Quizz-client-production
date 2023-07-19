import {useParams} from 'react-router-dom'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'; 

function PlayerForm(props){

    

    const {gameId} = useParams()
    const history = useNavigate();


    const submitHandler = e => {
        
        e.preventDefault();
        const name = e.currentTarget.name.value
        

        if(name === ''){
            swal.fire('No podes ingresar un nombre vacio')
        }else{
        const newPlayer = {
            "name": name,
            "score":props.score,     
        }
        fetch(`https://quizz-y0dw.onrender.com/api/game/${gameId}/add-player`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode:'cors',
            body: JSON.stringify(newPlayer)
        }).then(
            history(`/`) 
        )
        }
    }

    return(<>
        <form onSubmit={submitHandler} className="text-center">
            <h5> ¡ Entraste en el top10 con {props.score} puntos !</h5>
            <p className="mt-5 color-dark">Player name: <input  name="name" /></p>
            <button className="btn-play-again mx-auto my-auto px-3 "  > Entrar al top10</button>
        </form>
    </>)
}
export default PlayerForm;

