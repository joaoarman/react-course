import React, { useEffect } from 'react'
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


function App() {

  const [nomeProduto, setNomeProduto] = React.useState(null)

  function handleClick(e) {
      var a = e.target.textContent.toLowerCase();
      setNomeProduto(a)
  }

  React.useEffect(() => {
      var b = window.localStorage.getItem('nomeProduto')
      if(b) {
        setNomeProduto(b)
      }
  }, []) 

  React.useEffect(() => {
      if(nomeProduto) {
        window.localStorage.setItem('nomeProduto', nomeProduto)
      }
  }, [nomeProduto])

  return (
      <>
          <h1>Preferência: {nomeProduto ? nomeProduto : ''} </h1>
          <button onClick={handleClick}>Notebook</button>
          <button onClick={handleClick}>Smartphone</button>
          {nomeProduto && <Produto nomeProduto={nomeProduto}/>}
      </>
  )
}

export default App
