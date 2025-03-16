import React from 'react'
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

var pathName = window.location.pathname
var titleText = ''
var Pagina;

switch(pathName) {
  case '/':
    Pagina = Home;
    break;
  case '/produtos':
    Pagina = Produtos;
    break;
}

function App() {
  return (
    <>
      <Header />
      <Pagina />
    </>
  )
}

export default App
