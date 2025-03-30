import { Link } from 'react-router-dom';
import '../../App.css';
import logo from './youCourse-logo.png';

function Header(){
    return (
        <header className="flex justify-around  fixed top-0 left-0 text-red-600 font-bold text-[20px] w-full bg-gray-900 p-3 border-b-2 border-red-600">
            <div className='flex items-center rounded-lg h-[35px] w-[60px]'>
                <Link to="/youCourse">
                     <img src={logo} alt="logo do site"  />
                </Link>
            </div>


            <nav>
                <section className='flex space-x-5 cursor-pointer '>
                    <Link to="/youCourse" className='hover:text-slate-200 transition duration-300 ease-in-out' translate='no'>Home</Link>
                    <Link to='/sobre' className='hover:text-slate-200 transition duration-300 ease-in-out'> Sobre </Link>
                    <Link
                     to='/pesquisar'
                     className='hover:text-slate-200 transition duration-300 ease-in-out'> Pesquisar </Link>
                </section>
            </nav>
        </header>
    );
}

export default Header;