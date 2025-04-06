import Container from '../../components/Container';
import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useFavoriteContext } from '../../components/contexts/Favorites';
import '../../App.css';

function Favoritos(){

    const { favorites, setFavorite } = useFavoriteContext();

    return(
        <div>
        <Header />
        <Container className="flex-grow">
            <div className="min-h-[80vh] flex flex-col items-center justify-start text-center mt-[60px] p-8 bg-zinc-900 text-white rounded-lg shadow-lg md:min-h-[80vh]">
                    <h1 className="text-4xl font-bold mb-4 text-white">Seus Favoritos</h1>
                    {favorites.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {favorites.map((favorite, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-4 bg-zinc-800 rounded-lg shadow-md"
                                >
                                    <img
                                        src={favorite.imgPlaylist}
                                        alt={favorite.title || "Playlist"}
                                        className="w-full h-[150px] object-cover rounded-t-lg"
                                    />
                                    <h2 className="text-lg font-bold mt-2">{favorite.title}</h2>
                                    <p className="text-sm text-gray-400">{favorite.canal}</p>
                                    <a
                                        href={favorite.LinkPlaylist}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Acessar
                                    </a> 
                                </div>
                            ))}
                        </div>
                    ) : <div>
                             <h2 className="text-lg font-bold mt-2">Nenhum favorito encontrado</h2>
                        </div>}
                </div>
            
        </Container>
        <Footer />
    </div>
       
    )
}

export default Favoritos;