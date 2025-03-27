import '../../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer className='bg-gray-900 p-4 pb-[16px] text-center w-full5 font-semibold text-1x1 text-red-600 flex  flex-col justify-center items-center border-t-2 border-red-600'>
            <p className='mb-2'> Desenvolvido por Lucas </p>
            <div className='flex flex-row gap-2 text-3xl '>

                <Link>
                    <FaLinkedinIn/>
                </Link>

                <Link>
                     <FaFacebook className='hover:text-red-500'/>
                </Link>
             
               <Link to="https://github.com/LucasLira-dev" target='_blank'>
                    <FaGithub className='hover:text-red-500'/>
               </Link>
             
            </div>
            
        </footer>
    )
}

export default Footer;