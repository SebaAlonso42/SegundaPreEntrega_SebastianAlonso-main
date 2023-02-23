import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './componentes/Cart/index';
import {BrowserRouter, Routes,Route} from 'react-router-dom';




function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> }/>
          <Route path='/cart' element={  <Cart/> }/>
          <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>  
    </div>
    </>
  );
}

export default App;
