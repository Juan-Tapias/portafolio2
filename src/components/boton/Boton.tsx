import pdf from "../../../public/Hoja-De-Vida.pdf"

function DescargarPDFBoton(){
    return (
        <a href={pdf}>
            <button className="border w-30 h-10 rounded-3xl">Descargar</button>
        </a>
    )
}

export default DescargarPDFBoton