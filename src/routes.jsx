import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pesquisar from "./pages/Pesquisar";
import FavoritesProvider from "./components/contexts/Favorites";
import Favoritos from "./pages/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter basename="/youCourse">
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/pesquisar" element={<Pesquisar />}></Route>
          <Route path="/*" element={<h1> Página não encontrada </h1>}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
