import Barralateral from "./components/barra_lateral";
import CalculadoraBasica from "./components/calc_b";
import Form_relatorio from "./components/formulario_relatorio";
import Queda_Desnivel from "./components/queda_desnivel";
import Resultado from "./components/resultado";
import Vazao from "./components/vazao";


function App() {
    return (
        <div className="App">
            <div>
                <p className="frase_inicial">Calcule o potencial de geração do seu recurso hidríco.</p>
                <div>
                    <div className="barral_calc_b">
                        <Barralateral />
                        <div>
                            <CalculadoraBasica />
                            <div className='queda_vazao'>
                                <Queda_Desnivel />
                                <Vazao />
                            </div>
                            <Resultado />
                            <Form_relatorio />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
