import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Pesquisar from './pages/Pesquisar';
import FavoritesProvider from './components/contexts/Favorites';

function AppRoutes(){
    return(
        <BrowserRouter basename='/youCourse'>
            <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                <Route path='/sobre' element={<About/>}>
                </Route>
                <Route path='/pesquisar' element={<Pesquisar/>}>
                </Route>
                <Route path='/*' element={<h1> Página não encontrada </h1>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;