import { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { useFavoriteContext } from "../contexts/Favorites";


function Card({ playlist, id }) {
  const [showDetails, setShowDetails] = useState(false); // Estado para mostrar detalhes do card
  const [favorite, setFavorite] = useState(true);

  const [isFavorite, setIsFavorite] = useState(false);

  const {favorites, addFavorite} = useFavoriteContext();


  function toggleDetails() {
    setShowDetails(!showDetails);
  }


  // Verifica se o card já está nos favoritos ao carregar
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = storedFavorites.some((fav) => fav.id === playlist.id);
    setIsFavorite(isFavorited);
  }, [playlist.id]);


  // Alterna o estado de favorito
  function toggleFavorite() {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      // Remover dos favoritos
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== playlist.id);
    } else {
      // Adicionar aos favoritos
      updatedFavorites = [...storedFavorites, playlist];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  }

  return (

    <div className="flex flex-col items-center justify-center w-full p-4 m-4 rounded-lg bg-zinc-800 scrollbar-hide">
      <div className="w-[250px] sm:w-[260px] md:w-[300px] lg:w-[200px] m-4">
        <img
          src={playlist.imgPlaylist}
          alt={playlist.title || "Playlist"}
          className="w-full h-[100px] rounded-t-lg"
        />
      </div>

      <div className="flex flex-row items-center">
        <div className="mb-[20px] cursor-pointer" onClick={toggleDetails}>
          {showDetails ? (
            <MdExpandLess className="text-white text-[1.7rem] cursor-pointer" />
          ) : (
            <MdExpandMore className="text-white text-[1.7rem] cursor-pointer" />
          )}
        </div>

        <div className="mb-[20px] cursor-pointer" onClick={toggleFavorite}>
          {isFavorite ? (
            <MdOutlineFavorite className="text-red-500 text-[1.7rem]" />
          ) : (
            <MdOutlineFavoriteBorder className="text-white text-[1.7rem]" />
          )}
        </div>
      </div>

      {showDetails && (
        <div className="bg-white text-black font-medium p-2 w-full" id="detalhes">
          <p>Canal: {playlist.canal}</p>
          <p>Aulas: {playlist.aulas}</p>
        </div>
      )}

      <Link
        to={playlist.LinkPlaylist}
        className="bg-red-700 hover:bg-red-600 w-full text-white font-bold py-2 px-4 text-center"
        target="_blank"
      >
        Acessar
      </Link>
    </div>

   
  );
}

export default Card;

//className="w-full overflow-x-auto scrollbar-hide whitespace-nowrap space-x-4

/* */


