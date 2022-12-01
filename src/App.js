import { Route, Routes } from "react-router-dom";


import Home from "./Home";
import Contacto from "./Contacto";
import Reservar from "./Reservar";
import NoPage from "./NoPage";

const App = () => {
  return (
    
      <Routes>
        <Route path="/Restaurant" element={<Home/>}> </Route>
        <Route path="/Restaurant/contacto" element={<Contacto/>}></Route>
        <Route path="/Restaurant/reservar" element={<Reservar/>}></Route>
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>



    
  );
};

export default App