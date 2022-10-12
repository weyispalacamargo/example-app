const Form_relatorio = () => {

    return (
        <div className='formulario_r'>
            <form action='http://localhost:3000/'>
                <div className="form">
                    <div>
                        <input type='text' value='Nome'></input>
                    </div>
                    <div>
                        <input type='text' value='Telefone'></input>
                    </div>
                </div>
                <div className="form">
                    <div>
                        <input type='text' value='Endereço'></input>
                    </div>
                    <div>
                        <input type='text' value='Concessionária'></input>
                    </div>
                </div>
                    <div className="form">
                        <input type='text' value='E-mail' className="email"></input>
                    </div>
                    <p className="form">Os dados de Endereço serão usados apenas no cálculo de economia potencial na sua região.</p>
                    <div className="form">
                        <input type='submit' value='Receber Relatório'></input>
                    </div>
            </form>

        </div>
    )
}

export default Form_relatorio;
