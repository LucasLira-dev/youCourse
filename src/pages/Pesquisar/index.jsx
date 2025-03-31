import { useEffect, useState } from 'react';
import '../../App.css'
import cursos from '../../db.json/playlists.json'
import Card from '../../components/Cards';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

import playlist from '../../db.json/playlists.json';
import ScrollToTopButton from '../../components/ScrollToTopButton';



function Pesquisar(){

    const [search, setSearch] = useState('')
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }, [])

    const cursosFiltrados=(search) => {
        return cursos.filter((course) => {
            return course.curso.toLowerCase().includes(search.toLowerCase())
        })
    };

    const resultados = cursosFiltrados(search)

    return(
        
        <Container>
        <ScrollToTopButton />
        <Header/>
        <div className='flex flex-col justify-center items-center mt-[60px] bg-black'>
            <input 
            type="search"
             name="fPesquisar" 
             id="fPesquisar"
             placeholder='Pesquise pela linguagem'
             translate='no'
             className='bg-white border-[3px] placeholder:text-[18px] pl-3  rounded-lg min-w-[280px] mt-[30px] p-[5px] border-red-800'
             onChange={(e) => setSearch(e.target.value)}
             />

            {loading ? <Loader/> : (
              <div className='flex flex-wrap mt-4 gap-4  rounded-lg w-full min-h-[68vh] overflow-x-hidden'>
                    {search.length > 0 && resultados.length ? (
                        cursosFiltrados(search).map((course, index) => (
                            <div key={index} className='w-[90vw] mr-[3px] sm:w-[280px] md:w-[330px] lg:w-[280px] '>
                                <Card playlist={course} />
                            </div>
                        ))
                    ) : (
                       playlist.map((playlist, index) => (
                           <div key={index} className='w-[90vw] mr-[3px] sm:w-[280px] md:w-[330px] lg:w-[280px]'>
                               <Card playlist={playlist} />
                           </div>
                       ))
                    )}
                
                </div>
    )}  
            
        </div>
        <Footer/>
        </Container>
    )
}

export default Pesquisar;



/* <div className='flex flex-col items-center justify-center w-full h-[64vh] bg-zinc-900'> 
                             <h2 className=' text-red-500 w-full h-[80px] flex justify-center items-center text-2xl font-bold ml-2'> Sem resultados por enquanto....</h2>
                        </div> */