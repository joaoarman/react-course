import React from 'react'

function App() {
 
  const [cont, setCont] = React.useState(0)


  function handleClick() {
    setCont((prevCont) => prevCont + 1);
  }

  return (
    <>
      <h1>{cont}</h1>
      <button onClick={handleClick}>Adicionar 1</button>
      <hr />
    </>
  )
}

export default App
