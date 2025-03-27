import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Pesquisar from './pages/Pesquisar';

function AppRoutes(){
    return(
        <BrowserRouter >
            <Routes>
                <Route path='/youCourse' element={<Home/>}>
                </Route>
                <Route path='/sobre' element={<About/>}>
                </Route>
                <Route path='/pesquisar' element={<Pesquisar/>}>
                </Route>
                <Route path='*' element={<h1>Not Found</h1>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;