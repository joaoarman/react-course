import React from 'react'

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const Form = () => {

    const formFields = [
        {
            // Nome
            id: 'nome',
            name: 'nome',
            label: 'Nome: ',
            type: 'text'
        },
        {
            // Email
            id: 'email',
            name: 'email',
            label: 'Email: ',
            type: 'email'
        },
        {
            // Senha
            id: 'senha',
            name: 'senha',
            label: 'Senha: ',
            type: 'password'
        },
        {
            // CEP
            id: 'cep',
            name: 'cep',
            label: 'CEP: ',
            type: 'text'
        },
        {
            // Rua
            id: 'rua',
            name: 'rua',
            label: 'Rua: ',
            type: 'text'
        },
        {
            // Numero
            id: 'numero',
            name: 'numero',
            label: 'Número: ',
            type: 'text'
        },
        {
            // Bairro
            id: 'bairro',
            name: 'bairro',
            label: 'Bairro: ',
            type: 'text'
        },
        {
            // Cidade
            id: 'cidade',
            name: 'cidade',
            label: 'Cidade: ',
            type: 'text'
        },
        {
            // Estado
            id: 'estado',
            name: 'estado',
            label: 'Estado: ',
            type: 'text'
        }
    ];
    
    var formReduced = formFields.reduce((acc, field) => {
        return {...acc, [field.id]: ''};
    }, {});

    const [form, setForm] = React.useState(formReduced);
    const [requestResult, setRequestResult] = React.useState(null)

    function handleInput({target}) {
        setForm((prevForm) => ({
            ...prevForm,
            [target.id]: target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Essa é a função utilizado para realizar o POST
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            // form é o objeto com os dados do formulário
            body: JSON.stringify(form),
        }).then((response) => {
            console.log(response)
            setRequestResult(response)
        }); 
            
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    formFields.map(field => {
                        return (
                            <div key={field.id}>
                                <label htmlFor={field.id}>{field.label}</label>
                                <input 
                                    id={field.id} 
                                    type={field.type} 
                                    name={field.name} 
                                    value={form[field.id]} 
                                    onChange={handleInput}
                                />
                            </div>
                        )
                    })
                }
                <input type="submit"/>
            </form>
            {requestResult && requestResult.ok && <p>Formulário Enviado</p>}
            {/* <h1>{form.nome}</h1> */}

            <hr />

            <label>
                <input name="produto" type="radio"/>Notebook
            </label>
            <label>
                <input name="produto" type="radio"/>Smartphone
            </label>
        </>
    )
}

export default Form
