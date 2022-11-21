//Esta función al ser escrita en sintáxis de React se llama COMPONENTE
const Curso = (props) => {
    return (
    <>
        <hr />
        <h2>{props.curso} </h2>
        <div>Profesor: <span>{props.profesor} </span></div>
        <div>Duración: <span>{props.duracion} semanas</span></div>
    </>
    )
}

export default Curso;