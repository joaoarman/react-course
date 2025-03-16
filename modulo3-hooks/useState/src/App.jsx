import React from 'react'
import Produto from './Produto'


// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {

  const [produto, setProduto] = React.useState(null)
  const [carregando, setCarregando] = React.useState(false)

  function handleClick(e) {
    setCarregando(true)
    var url = `https://ranekapi.origamid.dev/json/api/produto/${e.target.textContent.toLowerCase()}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProduto(data)
      setCarregando(false)
    })

  }


  return (
    <>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <hr />
      {carregando && <p>Carregando...</p>}
      {!carregando && produto && <Produto produto={produto} />}
    </>
  )
}

export default App
