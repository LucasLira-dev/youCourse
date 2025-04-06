import { createContext, useContext, useEffect, useState } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'my favorites';

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorite] = useState([]);

    return(
        <FavoritesContext.Provider value={{ favorites, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}


//hook personalizado para usar o contexto
export function useFavoriteContext(){
    const { favorites, setFavorite} = useContext(FavoritesContext);

     // Carrega os favoritos do localStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(storedFavorites);
  }, []);

    function addFavorite(newFavorite){
        //verifica se o item já existe na lista de favoritos
        const repeatedFavorite = favorites.some((item)=> item.id === newFavorite.id);

        //nova lista recebe lista anterior
        let newList = [...favorites];

        //se o item não existe na lista, adiciona o item
        if(!repeatedFavorite){
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        //se o item já existe na lista, remove o item
        newList = favorites.filter((item) => item.id !== newFavorite.id);
        return setFavorite(newList);
    }

    return { favorites, addFavorite }
}