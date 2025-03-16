import React from 'react'

const Produto = ( { nomeProduto } ) => {
        
    const [dados, setDados] = React.useState(null);    

    React.useEffect(() => {


        var url = `https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDados(data)
            })


    }, [nomeProduto])


    if(!dados) return null

    return (
        <>  
            <h1>{dados.nome}</h1> 
            <p>R$ {parseFloat(dados.preco)}</p>  
        </>
    )
}

export default Produto
