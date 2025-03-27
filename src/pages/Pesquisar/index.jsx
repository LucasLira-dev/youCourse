import { useState } from 'react';
import '../../App.css'
import cursos from '../../db.json/playlists.json'
import Card from '../../components/Cards';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function Pesquisar(){

    const [search, setSearch] = useState('')
    console.log(search)

    const cursosFiltrados=(search) => {
        return cursos.filter((course) => {
            return course.curso.toLowerCase().includes(search.toLowerCase())
        })
    };

    const resultados = cursosFiltrados(search)

    return(
        <Container>
        <Header/>
        <div className='flex flex-col justify-center items-center mt-[60px] bg-black'>
            <input 
            type="search"
             name="fPesquisar" 
             id="fPesquisar"
             placeholder='Pesquise pela linguagem'
             translate='no'
             className='bg-white border-[3px] rounded-lg min-w-[280px] mt-[30px] p-[5px] border-red-800'
             onChange={(e) => setSearch(e.target.value)}
             />

             {/* <div className='flex flex-wrap gap-4 p-4 rounded-lg w-full overflow-x-auto'>
                {search.length > 0 && (
                cursosFiltrados(search).map((course, index) => (
                     <div key={index} id='detalhes'>
                          <Card playlist={course}/>
                     </div>
            ))
            )} 
             </div> */}
              <div className='flex flex-wrap mt-4 gap-4  rounded-lg w-full min-h-[68vh] overflow-x-hidden'>
                    {search.length > 0 && resultados.length ? (
                        cursosFiltrados(search).map((course, index) => (
                            <div key={index} className='w-[90vw] mr-[3px] sm:w-[280px] md:w-[330px] lg:w-[280px] '>
                                <Card playlist={course} />
                            </div>
                        ))
                    ) : (
                        <div className='flex flex-col items-center justify-center w-full h-[64vh] bg-zinc-900'> 
                             <h2 className=' text-red-500 w-full h-[80px] flex justify-center items-center text-2xl font-bold ml-2'> Sem resultados por enquanto....</h2>
                        </div>
                    )}
                </div>
            
        </div>
        <Footer/>
        </Container>
    )
}

export default Pesquisar;