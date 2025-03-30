import '../../App.css'
import Container from '../../components/Container'
import Header from  '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import Category from '../../components/Category'
import playlists from '../../db.json/playlists.json'
import Banner from '../../components/Banner'


const categories= [
    "JavaScript",
    "Python",
    "PHP",
    "Java",
    "React"
]

const filterPlaylists = (category) => {
    return playlists.filter((playlist) => {
        return playlist.curso === category;
    });
}


function Home(){
    return(
        <div className="flex flex-col min-h-screen">
        <Header />
        <Banner/>
        <Container>
            {categories.map((category, index) => (
                <Category
                key={index} 
                category={category}>
                  {filterPlaylists(category).map((playlist, index) => (
                    <Cards key={index} playlist={playlist} />
                  ))}
                </Category>
            ))}
        </Container>
        <Footer />
        </div>
    )
}

export default Home;