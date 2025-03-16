import React from 'react'

const Produto =  ({ produto }) => {
  return (
    <>
        <h1>{produto.nome}</h1>
        <p>R${produto.preco}</p>
        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
    </>
  )
}

export default Produto
