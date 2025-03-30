
import { useState } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

function Card({playlist}) {

    const [showDetails, setShowDetails] = useState(false);

    const [favorite, setFavorite] = useState(true);

    function toggleDetails() {
        setShowDetails(!showDetails);
    }


    return (
         <div className='flex flex-col items-center justify-center w-full p-4 m-4 rounded-lg bg-zinc-800 scrollbar-hide'> 
           {/* {playlists.map((playlist, index) => (
                <div key={index} className='flex flex-col items-center justify-center w-[200px] sm:w-1/2 md:w-[200px]  lg:w-[18%] p-2 rounded-lg bg-zinc-800'>  */}
                    <div className='w-[300px] sm:w-[280px] md:w-[300px] lg:w-[200px] m-4'>
                        <img src={playlist.imgPlaylist} alt="" className='w-full h-[100px] rounded-t-lg' />
                    </div>


                <div className='flex flex-row items-center '>
                    <div className='mb-[20px]  cursor-pointer' onClick={toggleDetails}>
                     {showDetails ? (
                      <MdExpandLess className='text-white text-[1.7rem] cursor-pointer' />
                    ) : (
                    <MdExpandMore className='text-white text-[1.7rem] cursor-pointer' />
                    )}
                    </div>

                    <div className='mb-[20px] cursor-pointer'
                    onClick={() => setFavorite(!favorite)}>
                     {favorite ? (
                      <MdOutlineFavoriteBorder className='text-white text-[1.7rem] '/>) : <MdOutlineFavorite className='text-white text-[1.7rem] '/>}
                    </div>
                </div>
                 


                {showDetails && (
                    <>

                         <div className='bg-white text-black font-medium p-2 w-full 'id='detalhes'>
                         <p>Canal: {playlist.canal}</p>
                         <p>Aulas: {playlist.aulas}</p>
                         </div>
                    </>
                  
                 )}

                    <Link to={playlist.LinkPlaylist} className='bg-red-700 hover:bg-red-600 w-full text-white font-bold py-2 px-4 text-center' target='_blank'>
                        Acessar
                    </Link>
                 </div>
       //     ))}
        // </div> 
        
        
    )
}

export default Card;
   


//className="w-full overflow-x-auto scrollbar-hide whitespace-nowrap space-x-4