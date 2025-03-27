import Container from '../../components/Container';
import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function About(){
    return(
        <div className="flex flex-col min-h-screen">
        <Header />
        <Container>
            <div className="min-h-[500px] flex flex-col items-center justify-center text-center mt-[80px] p-8 bg-zinc-900 text-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
                <p className="text-lg mb-4">
                    Bem-vindo ao YouCourse! Somos uma plataforma dedicada a fornecer cursos de alta qualidade sobre JavaScript, React, HTML/CSS e muito mais.
                </p>
                <p className="text-lg mb-4">
                    Nossa missão é ajudar desenvolvedores de todos os níveis a aprimorar suas habilidades e alcançar seus objetivos profissionais.
                </p>
                <p className="text-lg mb-4">
                    Oferecemos uma variedade de cursos, desde o nível iniciante até o avançado, para garantir que você encontre o conteúdo certo para o seu nível de experiência.
                </p>
                <p className="text-lg mb-4">
                    Junte-se a nós e comece sua jornada de aprendizado hoje mesmo!
                </p>
            </div>
        </Container>
        <Footer />
    </div>
       
    )
}

export default About;