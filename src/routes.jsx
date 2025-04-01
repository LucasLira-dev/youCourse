import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Pesquisar from './pages/Pesquisar';
import FavoritesProvider from './components/contexts/Favorites';

function AppRoutes(){
    return(
        <BrowserRouter >
            <Routes>
                <Route path='/youCourse' element={<Home/>}>
                </Route>
                <Route path='/youCourse/sobre' element={<About/>}>
                </Route>
                <Route path='/youCourse/pesquisar' element={<Pesquisar/>}>
                </Route>
                <Route path='/youCourse/*' element={<h1> Página não encontrada </h1>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;