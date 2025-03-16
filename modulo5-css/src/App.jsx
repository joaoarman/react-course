import React from 'react'
import Slides from './Slides';
import styles from './Slides.module.css';

function App() {

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  const [ativo, setAtivo] = React.useState(0);
  const [posicao, setPosicao] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosicao(-(width * ativo));
  }, [ativo]);


  function slidePrev() {
    if(ativo > 0) {
      setAtivo(ativo - 1)
    }
  }

  function slideNext() {
    if(ativo < slides.length - 1) {
      setAtivo(ativo + 1)
    }
  }
  

    return (
        <>
          <Slides slides={slides} ativo={ativo} contentRef={contentRef} posicao={posicao}/>
          <div className={styles.buttonsDiv}>
            <button onClick={slidePrev}>Anterior</button>
            {"Slide ativo: " + ativo}
            <button onClick={slideNext}>Próximo</button>
            
          </div>
        </>
        
    )
    
}

export default App
