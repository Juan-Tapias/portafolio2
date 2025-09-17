import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';   

const Header = () => {
    return (
        <>
        <div className='flex items-center justify-center'>
            <div className="flex items-center justify-evenly space-x-4 m-10 p-3 rounded-full bg-purple-400 w-md">
                <FaUser className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-2  hover:drop-shadow-[0_0_7px_blue] cursor-pointer" />
                <FaProjectDiagram className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-2  hover:drop-shadow-[0_0_7px_blue] cursor-pointer" />
                <FaCode className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-2  hover:drop-shadow-[0_0_7px_blue] cursor-pointer" />
                <FaHandshake className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-2  hover:drop-shadow-[0_0_7px_blue] cursor-pointer" />
                <FaEnvelope className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-2  hover:drop-shadow-[0_0_7px_blue] cursor-pointer" />
            </div>
        </div>
        </>
    )
}

export default Header