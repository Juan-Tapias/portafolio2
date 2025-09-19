
function DescargarPDFBoton(){
    return (
        <a href="../../../public/Hoja-De-Vida.pdf" target="_blank" >
            <button className="border w-30 h-10 rounded-3xl 
             shadow-[0_0_10px_rgba(128,0,128,0.7)]
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_20px_rgba(186,85,211,1)]
             hover:border-purple-400
             hover:scale-105"
             >Descargar
             </button>
        </a>
    )
}

export default DescargarPDFBoton