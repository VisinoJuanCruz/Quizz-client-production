import swal from 'sweetalert2'

function ThemeForm(){

    const submitHandler = e => {
        e.preventDefault();
        const name = e.currentTarget.name.value
        const imageUrl = e.currentTarget.imageUrl.value

        if(name == ''){
            swal.fire('No podes ingresar un nombre de tema vacio');
            return;
        }
        if(imageUrl == ''){
            swal.fire('No podes ingresar una url vacía');
            return;
        }
        
        const newTheme = {
            "name": name,
            "imageUrl":imageUrl
        }

        fetch(`https://quizz-y0dw.onrender.com/api/game/add-theme`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode:'cors',
            body: JSON.stringify(newTheme)
        })
        
        swal.fire({
            title:'Agregado correctamente',
            icon:'success',
        }).then((result) => {
            if(result.isConfirmed){
                window.location.href = `/add-theme`
            }
        })
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <h5>Completá los datos para agregar el nuevo tema</h5>
                <p className="mt-5 color-dark">Nombre:<input name="name" /></p>
                <p>imageUrl:<input name="imageUrl" /></p>
                <button className="btn btn-dark mx-2" type="submit">Agregar</button>
            </form>
        </>)
}

export default ThemeForm;

