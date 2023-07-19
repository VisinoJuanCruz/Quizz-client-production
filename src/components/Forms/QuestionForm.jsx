import {useParams} from 'react-router-dom'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'

function QuestionForm(){

    const [checked, setChecked] = useState(false)
    const {gameId} = useParams()
    const history = useNavigate()

    const submitHandler = e => {
    
        e.preventDefault();
        
        const question = e.currentTarget.question.value
        const isImage = e.currentTarget.isImage.checked
        const isAudio = false
        const correct = e.currentTarget.correct.value
        const wrong1 = e.currentTarget.wrong1.value
        const wrong2 = e.currentTarget.wrong2.value
        const wrong3 = e.currentTarget.wrong3.value
        const audioUrl = null
        const imageUrl = checked ? e.currentTarget.imageUrl.value : null;

       


        if(question === ''){
            swal.fire('No podes ingresar una pregunta en blanco')
            return;
        }
        if(correct === ''){
            swal.fire('No podes ingresar una respuesta correcta en blanco')
            return;
        }
        if(wrong1 === ''){
            swal.fire('No podes ingresar una respuesta en blanco')
            return;
        }
        if(wrong2 === ''){
            swal.fire('No podes ingresar una respuesta en blanco')
            return;
        }
        if(wrong3 === ''){
            swal.fire('No podes ingresar una respuesta en blanco')
            return;
        }
        
        swal.fire('La pregunta se agregó correctamente')

        const newQuestion = {
            "question": question,
            "isImage": isImage,
            "isAudio":isAudio,
           
            "answers":[
                {"textoRespuesta":correct, isCorrect:true},
                {"textoRespuesta":wrong1, isCorrect:false},
                {"textoRespuesta":wrong2, isCorrect:false},
                {"textoRespuesta":wrong3, isCorrect:false}
            ],
            "audioUrl":audioUrl,
            "imageUrl":imageUrl
        }

        fetch(`https://quizz-y0dw.onrender.com/api/game/${gameId}/add-question`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode:'cors',
            body: JSON.stringify(newQuestion)
        }).then(
            history(`/game/${gameId}/add-question`)
        )

        e.currentTarget.question.value = ''
        e.currentTarget.correct.value = ''
        e.currentTarget.wrong1.value = ''
        e.currentTarget.wrong2.value = ''
        e.currentTarget.wrong3.value = ''
        e.currentTarget.isImage.checked = false
        
        }

    return(<>
        <form onSubmit={submitHandler}>
            <p>Pregunta:<input name="question" /></p>
            <p>Respuesta correcta:<input name="correct" /></p>
            <p>La pregunta contiene una imagen? <input className="isImage" type="checkbox" name="isImage" onClick={() => setChecked(!checked)}/></p>            
            { checked && <p>Link imagen: <input name="imageUrl" /></p> }
            <p>Respuesta incorrecta 1:<input name="wrong1" /></p>
            <p>Respuesta incorrecta 2:<input name="wrong2" /></p>            
            <p>Respuesta incorrecta 3:<input name="wrong3" /></p>           
            <button className="btn btn-dark mx-2" //onClick={() => window.location.href = `/game/${gameId}/add-question`}
             type="submit">
            Enviar pregunta          
          </button>
        </form>
    </>)
}

export default QuestionForm;

