import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import Home from "./Home";
import Contacto from "./Contacto";
import Reservar from "./Reservar";
import NoPage from "./NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container/>}> 
            <Route index element={<Home/>}></Route>
            <Route path="contacto" element={<Contacto/>}></Route>
            <Route path="reservar" element={<Reservar/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App